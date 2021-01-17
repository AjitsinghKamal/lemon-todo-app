import app from './Server';
import { PORT, DB_URL } from './configs';
import { connectDb } from './models';

async function init() {
	try {
		await connectDb(DB_URL);
		app.listen(PORT, () => {
			console.log(`Express server started on port: ${PORT}`);
		});
	} catch (e) {
		console.error('Db connection failed', DB_URL);
	}
}

init();
