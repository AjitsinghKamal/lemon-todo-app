import express, { NextFunction, Request, Response } from 'express';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import BaseRouter from './routes/v1';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Add APIs
app.use('/v1', BaseRouter);
console.log('1');
export default app;
