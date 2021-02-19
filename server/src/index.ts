import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { config } from 'dotenv';
import { __PROD__ } from './helpers/constants';
import {
  OAuthResponseType,
  SIMCheckResponseType,
  SIMCheckType,
} from './helpers/types';
import fetch from 'node-fetch';
import FormData from 'form-data';
(() => {
  const app = express();
  config();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan(!__PROD__ ? 'dev' : 'common'));
  app.use('/', (_, res) =>
    res.send(`<h1>So it doesn't say: "Cannot get /" </h1>`),
  );
  app.post('/api/simcheck', async (req, res) => {
    const { phone_number }: SIMCheckType = req.body;
    try {
      // make request body acceptable by application/x-www-form-urlencoded
      const formData = new FormData();
      formData.append('grant_type', 'client_credentials');
      formData.append('scope', 'sim_check');
      const resp = await fetch(`${process.env.BASE_URL}/oauth2/v1/token`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Basic ${process.env.TRU_CLIENT_ID}:${process.env.TRU_CLIENT_SECRET}`,
        },
      });
      const { access_token }: OAuthResponseType = await resp.json();

      // perform simcheck with access token and phone number
      const body = JSON.stringify({ phone_number });
      const response = await fetch(
        `${process.env.BASE_URL}/sim_check/v0.1/checks`,
        {
          method: 'POST',
          body,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      const {
        no_sim_change,
        status,
      }: SIMCheckResponseType = await response.json();

      res.status(200).send({ status, no_sim_change });
    } catch (e) {
      throw new Error(e.message);
    }
  });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
})();
