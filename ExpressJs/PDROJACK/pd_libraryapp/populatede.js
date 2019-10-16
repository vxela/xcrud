var async = require('async')
var Book = require('./models/book')
var Author = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')

faker.locale = "de";
var faker=require('faker');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

