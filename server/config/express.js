'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const session    = require('express-session');

module.exports = () => {

  let app = express();

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