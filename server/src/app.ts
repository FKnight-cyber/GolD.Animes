import express, { json } from 'express';
import cors from 'cors';
import animesRouter from './routes/animesRouter';

const app = express();

app.use(json());
app.use(cors());
app.use(animesRouter);

export default app;