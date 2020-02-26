import express, { NextFunction, Request, Response } from 'express';
import { handleError, notFound, setGlobalMiddlewares } from './middlewares';
import { AppError } from './modules/errors';
import passwordComplexity from './routes/passwordComplexity';

const PORT = process.env.PORT || 3004;

const app = express();
setGlobalMiddlewares(app);

app.get('/', (_req, res) => {
  res.send('The sedulous hyena ate the antelope!!');
});

app.use('/password-complexity', passwordComplexity);

app.use(notFound);
app.use((err: AppError, _req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
