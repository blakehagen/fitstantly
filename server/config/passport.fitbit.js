'use strict';

const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const fitbitAuth     = require('./keys/fitbitAuthKeys');

module.exports = (passport) => {

  passport.use(new FitbitStrategy({
    clientID: fitbitAuth.fitbitAuthKeys.clientID,
    clientSecret: fitbitAuth.fitbitAuthKeys.clientSecret,
    scope: ['activity', 'profile'],
    callbackURL: 'http://localhost:8100/auth/fitbit/callback'
  }, (accessToken, refreshToken, profile, done) => {

    done(null, {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};