var mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'twain:tuhu*ETrEph3@ds147681.mlab.com';
var mongPort = process.env.MONGO_PORT_27017_TCP_PORT || '47681';

var serverAddress = 'mongodb://' + mongoHost + ':' + mongPort;
var connectionString = serverAddress + "/dont-be-stupid";

module.exports = {
	secret: 'productionSecret',
	mongodb: {
		uri: connectionString,
		options: { }		
	}
};

