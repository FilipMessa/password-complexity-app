import supertest from 'supertest';
import { server } from '../server';
const request = supertest(server);

test('should return not found error', async () => {
  const res = await request.post('/unknown-api').send({
    password: 'aaaaa',
  });
  expect(res.body).toMatchSnapshot();
});

['v1', 'v2'].forEach((apiVersion) => {
  describe(`/password-complexity/${apiVersion}`, () => {
    it('should return socpre 0', async () => {
      const res = await request.post('/password-complexity/v2').send({
        password: 'aaaaa',
      });
      expect(res.body).toMatchSnapshot();
    });

    it('should return socpre 1', async () => {
      const res = await request.post(`/password-complexity/${apiVersion}`).send({
        password: 'aaaaa1',
      });
      expect(res.body).toMatchSnapshot();
    });

    it('should return socpre 2', async () => {
      const res = await request.post(`/password-complexity/${apiVersion}`).send({
        password: '1aaa!',
      });
      expect(res.body).toMatchSnapshot();
    });

    it('should return socpre 3', async () => {
      const res = await request.post(`/password-complexity/${apiVersion}`).send({
        password: '1aaa!A',
      });
      expect(res.body).toMatchSnapshot();
    });

    it('should return socpre 4', async () => {
      const res = await request.post(`/password-complexity/${apiVersion}`).send({
        password: '1aaa!A@@2!',
      });
      expect(res.body).toMatchSnapshot();
    });

    it('should return bad request error', async () => {
      const res = await request.post(`/password-complexity/${apiVersion}`).send({
        psw: '1235667a',
      });

      expect(res.body).toMatchSnapshot();
    });
  });
});
