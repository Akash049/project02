var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var models = require('./app/config/models');
var config = require('./app/config/config');

//Setting up the express middleware
app.use(morgan('dev'));                                         //this will log every request to the console
app.use(bodyParser.urlencoded({'extended' : 'true'}));          //this is to parse the request in application/x-www-form-urlencoded
app.use(bodyParser.json());                                     //this is to parse the request  as application/json
app.use(bodyParser.json({type : 'application/vnd.api+json'}));  //This is to parse application/vnd.api+json as JSON
app.use(methodOverride());


//Opening the connection to the mongo server
mongoose.connect(config.db);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

//Initiating the connection to the port 2000
app.listen(config.port, function(err){
    if(err) throw err;
    console.log("App listening to the port : "+config.port);
})

