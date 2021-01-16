import app from './Server';
import Config from './configs';

const port = Config.PORT;

app.listen(port, () => {
	console.log('Express server started on port: ' + port);
});
