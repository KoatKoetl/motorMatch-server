import cors from 'cors';
import express, { Request, Response } from 'express';
import router from './app/modules/products/products.route';

const app = express();

app.use(
  cors({
    origin: ['https://motormatch.onrender.com'],
  })
);
app.use(express.json());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Welcome to the API',
  });
});

app.use('*', (req, res) => {
  res.json({
    success: false,
    message: 'ROUTE NOT FOUND.',
  });
});

export default app;
