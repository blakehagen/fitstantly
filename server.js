'use strict';

// REQUIRES //
var express  = require('./server/config/express.js');
var passport = require('passport');
require('./server/config/passport.fitbit')(passport);

// RUN EXPRESS //
var app = express();

// PASSPORT //
app.use(passport.initialize());
app.use(passport.session());

// TEST ROUTE //
app.get('/api/test', function (req, res) {
  res.status(200).send('This is working -- ' + new Date());
});

// PATH TO FITBIT ROUTES //
require('./server/features/fitbit/fitbit.server.routes')(app, passport);

// PORT //
var port = process.env.PORT || 80;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});