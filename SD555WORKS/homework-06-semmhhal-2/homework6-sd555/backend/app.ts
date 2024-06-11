import express, { json } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import {
  CheckEmail,
  CreateEmail,
  errorHandler,
  noRouteHandler,
} from './EHandlers/E.controller';

const app = express();
const PORT = 3000;

export async function connectDB() {
  try {
    if ('mongodb://127.0.0.1:27017/homework6-sd555') {
      mongoose
        .connect('mongodb://127.0.0.1:27017/homework6-sd555')
        .then(() => console.log('connected sucessfully'))
        .catch((error) => console.error(error));
    }
  } catch (error) {
    console.log(error);
  }
}

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.set('port', PORT);

app.post('/subscribe', CreateEmail);
app.post('/verify', CheckEmail);

app.all('*', noRouteHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
