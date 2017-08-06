import mongoose from 'mongoose';
import debug from 'debug';

const d = debug('kickstarter:monogdb');

function connectDatabase(uri) {
	mongoose.connection
		.on('error', error => d(error))
		.on('close', () => d('Database connection closed.'))
		.once('open', () => {
			const info = mongoose.connections[0];
			d(`Connected to ${info.host}:${info.port}/${info.name}`);
		});

	mongoose.connect(uri);
}

export default connectDatabase;
