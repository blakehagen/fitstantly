'use strict';

let express    = require('express');
let bodyParser = require('body-parser');
let cors       = require('cors');
let session    = require('express-session');

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