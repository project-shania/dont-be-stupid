var mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost';
var mongPort = process.env.MONGO_PORT_27017_TCP_PORT || '27017';

var serverAddress = 'mongodb://' + mongoHost + ':' + mongPort;
var connectionString = serverAddress + "/finproj";

module.exports = {
	secret: 'productionSecret',
	mongodb: {
		uri: connectionString,
		options: { }		
	}
};