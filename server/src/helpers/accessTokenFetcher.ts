import { OAuthResponseType } from './types';
import { config } from 'dotenv';
import fetch from 'node-fetch';
import btoa from 'btoa';
config();
config();
// create access token
const createAccessToken = async () => {
  // make request body acceptable by application/x-www-form-urlencoded
  const clientID = process.env.TRU_CLIENT_ID;
  const clientSecret = process.env.TRU_CLIENT_SECRET;

  const basicAuth = btoa(`${clientID}:${clientSecret}`);
  const resp = await fetch(`${process.env.BASE_URL}/oauth2/v1/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials&scope=sim_check',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${basicAuth}`,
    },
  });
  const { access_token }: OAuthResponseType = await resp.json();
  return access_token;
};
export { createAccessToken };
