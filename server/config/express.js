'use strict';

var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');
var session    = require('express-session');

module.exports = () => {

  var app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use(session({
    secret: 'thisisasecretdonttellanyone',
    resave: false,
    saveUninitialized: true
  }));

  // LINK TO FRONT END //
  app.use(express.static('public'));

  return app;
};