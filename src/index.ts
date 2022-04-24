import express, { json } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const app = express();
app.use(json());
// catch 404 and forward to error handler
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  err.status = 404;
  next(err);
});

app.use('/v1', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
