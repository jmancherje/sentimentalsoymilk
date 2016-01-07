var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// var router = require('./routers/router.js');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

//var router = require(./routers/router.js);
var db = require('./models/dbconnect.js');
var User = require('./models/users.js');
var Trips = require('./models/trips.js');
var TripItems = require('./models/tripItem.js');

// var user = new user({ name: 'Tessa' , password: 'password'});
// console.log(silence.name);

var app = express();
var db = require('./models/dbconnect.js');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var user = new User({username:'tessa'});
console.log(user.username);

app.use(express.static(__dirname+'/../public'));


app.listen(port);
console.log('Listening on ' + port);



module.exports = app; 

/*
file system
-Server 
  -server.js - init server
  -Users
    -usersModel
    -usersController
  -Trips
    -tripsModel
    -tripsController
  -ApiData
    -ApiDModel
    -ApliController
-Config
  -helper: error logger and handler?
  -routes
  -utils: get urlTitle, isValidUrl? 

-Server 
  -server.js - init server
  -Controllers
    -usersController
    -tripsController
    -ApiController
  -Models
    -usersModel
    -tripsModel
    -ApiDModel
  -Routers
    -router.js
-Config
  -helper: error logger and handler?
  -routes
  -utils: get urlTitle, isValidUrl? 


*/