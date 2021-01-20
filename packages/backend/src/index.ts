import app from './Server';
import { PORT, DB_URL } from './configs';
import { connectDb } from './entities';

async function init() {
	try {
		await connectDb(DB_URL);
		console.log('2');
		app.listen(PORT, () => {
			console.log(`Express server started on port: ${PORT}`);
		});
	} catch (e) {
		console.error('Db connection failed');
	}
}

app.use(function (err, req, res, next) {
	return res.status(err.code).json({
		statusCode: err.code || 500,
		status: err.status || 'error',
		message: err.message,
	});
});

app.use(function (req, res) {
	res.status(400).send('404 - not found');
});
init();
console.log('5');
