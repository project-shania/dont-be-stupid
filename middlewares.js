var express 		  = require('express')	
	, cors 			  = require('cors')
	, bodyParser      = require('body-parser')	
	, methodOverride  = require('method-override')
	, morgan 		  = require('morgan')
	, responseTime 	  = require('response-time')
	, compress 		  = require('compression')
	, passport 		  = require('passport')
	

module.exports = (app) => {

	if (process.env.NODE_ENV === 'development')
		app.use(morgan('dev'));
	else (process.env.NODE_ENV === 'production')
		app.use(compress());

	app.use(cors());
	
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	app.use(bodyParser.urlencoded({ extended: true }));
	
	app.use(methodOverride('X-HTTP-Method-Override'));	
	app.use(passport.initialize());

	app.use(responseTime());
};