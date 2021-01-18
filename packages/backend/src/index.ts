import app from './Server';
import { PORT, DB_URL } from './configs';
import { connectDb } from './entities';

async function init() {
	try {
		await connectDb(DB_URL);
		app.listen(PORT, () => {
			console.log(`Express server started on port: ${PORT}`);
		});
	} catch (e) {
		console.error('Db connection failed');
	}
}

init();
