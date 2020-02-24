import express from 'express';
import { PORT } from './config';

const app = express();

app.get('/', (_req, res) => {
  res.send('The sedulous hyena ate the antelope!!');
});
app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  return console.log(`server is listening on ${PORT}`);
});
