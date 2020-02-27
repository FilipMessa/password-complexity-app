import { server } from './server';

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
