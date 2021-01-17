import mongoose from 'mongoose';

const connectDb = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

mongoose.connection.on('error', (err) => {
	console.log(err);
});

export { connectDb };
