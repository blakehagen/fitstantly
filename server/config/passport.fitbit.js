'use strict';

var FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
var fitbitAuth     = require('./keys/fitbitAuthKeys');

module.exports = function (passport) {

  passport.use(new FitbitStrategy({
    clientID: fitbitAuth.fitbitAuthKeys.clientID,
    clientSecret: fitbitAuth.fitbitAuthKeys.clientSecret,
    scope: ['activity', 'profile'],
    callbackURL: 'http://localhost:8100/auth/fitbit/callback',
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    req.session.fitbitAccessToken = accessToken;

    done(null, {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });
};