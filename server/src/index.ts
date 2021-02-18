import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { config } from 'dotenv';
import { __PROD__ } from './helpers/constants';
(() => {
  const app = express();
  config();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan(!__PROD__ ? 'dev' : 'common'));
  app.use('/', (_, res) =>
    res.send(`<h1>So it doesn't say: "Cannog get /" </h1>`),
  );
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
})();
