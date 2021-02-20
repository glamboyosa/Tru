jest.mock('node-fetch');
import request from 'supertest';
import app from '../index';
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');
import { createAccessToken } from '../helpers/accessTokenFetcher';
describe('GET Endpoint', () => {
  it('should render HTML with a 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toMatch(/^<h1>/i);
  });
});
describe('POST Endpoint', () => {
  it('should call create_access only once', async () => {
    (fetch as unknown as jest.Mock).mockReturnValue(Promise.resolve(new Response('4')));
    const access_token = await createAccessToken();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  //   it('should return a status and a 200', async () => {
  //     const res = await request(app)
  //       .post('/api/simcheck')
  //       .send({ phone_number: '14168453280' });
  //     expect(res.status).toEqual(200);
  //   });
});
