'use strict';

var _               = require('lodash');
var request         = require('request');
var Promise         = require('bluebird');
var BRequest        = Promise.promisify(request);
var FITBIT_BASE_URL = 'https://api.fitbit.com/1/user/-';

module.exports = function (app, passport) {

  app.get('/auth/fitbit', passport.authenticate('fitbit'));

  app.get('/auth/fitbit/callback', passport.authenticate('fitbit'), function (req, res) {
    if (req.user) {
      res.redirect('/#/user/' + req.user.profile.id);
    } else {
      res.redirect('/');
    }
  });

  // GET FITBIT DATA //
  app.get('/api/v1/data', function (req, res) {

    if (!req.user) {
      res.status(500);
    }

    var userCredentials = {
      userId: req.user.profile.id,
      accessToken: req.user.accessToken,
      refreshToken: req.user.refreshToken
    };

    var BASE_OPTIONS = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userCredentials.accessToken}`
      }
    };

    var profileOptions           = _.cloneDeep(BASE_OPTIONS);
    profileOptions.url           = `${FITBIT_BASE_URL}/profile.json`;
    var activitiesTodayOptions   = _.cloneDeep(BASE_OPTIONS);
    activitiesTodayOptions.url   = `${FITBIT_BASE_URL}/activities/date/today.json`;
    var stepsOptions             = _.cloneDeep(BASE_OPTIONS);
    stepsOptions.url             = `${FITBIT_BASE_URL}/activities/steps/date/today/7d.json`;
    var veryActiveMinutesOptions = _.cloneDeep(BASE_OPTIONS);
    veryActiveMinutesOptions.url = `${FITBIT_BASE_URL}/activities/minutesVeryActive/date/today/7d.json`;
    var activitiesOptions        = _.cloneDeep(BASE_OPTIONS);
    activitiesOptions.url        = `${FITBIT_BASE_URL}/activities.json`;

    Promise.props({
        profile: BRequest(profileOptions),
        activitiesToday: BRequest(activitiesTodayOptions),
        steps: BRequest(stepsOptions),
        veryActiveMinutes: BRequest(veryActiveMinutesOptions),
        activities: BRequest(activitiesOptions)
      })
      .then(function (results) {

        var fitbitData = {
          profile: JSON.parse(results.profile.body),
          activitiesToday: JSON.parse(results.activitiesToday.body),
          steps: JSON.parse(results.steps.body),
          veryActiveMinutes: JSON.parse(results.veryActiveMinutes.body),
          activities: JSON.parse(results.activities.body)
        };
        res.status(200).json(fitbitData);
      })
      .catch(function (error) {
        res.status(500).json(error);
      })
  });

  // LOG OUT //
  app.get('/auth/logout', function (req, res) {
    req.logout();
    console.log('You have logged out')
    res.redirect('/#');
  });

};