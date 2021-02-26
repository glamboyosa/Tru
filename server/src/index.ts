import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { config } from 'dotenv';
import { __PROD__ } from './helpers/constants';
import { SIMCheckResponseType, SIMCheckType } from './helpers/types';
import fetch from 'node-fetch';
import { createAccessToken } from './helpers/accessTokenFetcher';

const app = express();
config();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(!__PROD__ ? 'dev' : 'common'));
app.get('/', (_, res) =>
  res.send(`<h1>So it doesn't say: "Cannot get /" </h1>`),
);
app.post('/api/simcheck', async (req, res) => {
  const { phone_number }: SIMCheckType = req.body;
  try {
    const access_token = await createAccessToken();

    // perform simcheck with access token and phone number
    const body = JSON.stringify({ phone_number });
    const response = await fetch(
      `${process.env.BASE_URL}/sim_check/v0.1/checks`,
      {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data: SIMCheckResponseType = await response.json();

    res.status(200).send({ data });
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
export default app;
