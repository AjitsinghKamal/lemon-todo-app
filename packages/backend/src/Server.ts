import express, { NextFunction, Request, Response } from 'express';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import StatusCodes from 'http-status-codes';

import BaseRouter from './routes';

const app = express();
const { BAD_REQUEST } = StatusCodes;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Add APIs
app.use('/v1', BaseRouter);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	return res.status(BAD_REQUEST).json({
		error: err.message,
	});
});

export default app;
