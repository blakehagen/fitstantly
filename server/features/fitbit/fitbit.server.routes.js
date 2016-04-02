'use strict';

const _               = require('lodash');
const request         = require('request');
const Promise         = require('bluebird');
const BRequest        = Promise.promisify(request, {multiArgs: true});
const FITBIT_BASE_URL = 'https://api.fitbit.com/1/user/-';

module.exports = (app, passport) => {

  let fitbitAuthenticate = passport.authenticate('fitbit', {
    successRedirect: '/auth/fitbit/success',
    failureRedirect: '/auth/fitbit/failure'
  });

  app.get('/auth/fitbit', fitbitAuthenticate);

  app.get('/auth/fitbit/callback', fitbitAuthenticate);

  app.get('/auth/fitbit/success', (req, res) => {

    const userCredentials = {
      userId: req.user.profile.id,
      accessToken: req.user.accessToken,
      refreshToken: req.user.refreshToken
    };

    const BASE_OPTIONS = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userCredentials.accessToken}`
      }
    };

    const profileOptions           = _.cloneDeep(BASE_OPTIONS);
    profileOptions.url             = `${FITBIT_BASE_URL}/profile.json`;
    const activitiesTodayOptions   = _.cloneDeep(BASE_OPTIONS);
    activitiesTodayOptions.url     = `${FITBIT_BASE_URL}/activities/date/today.json`;
    const stepsOptions             = _.cloneDeep(BASE_OPTIONS);
    stepsOptions.url               = `${FITBIT_BASE_URL}/activities/steps/date/today/7d.json`;
    const veryActiveMinutesOptions = _.cloneDeep(BASE_OPTIONS);
    veryActiveMinutesOptions.url   = `${FITBIT_BASE_URL}/activities/minutesVeryActive/date/today/7d.json`;
    const activitiesOptions        = _.cloneDeep(BASE_OPTIONS);
    activitiesOptions.url          = `${FITBIT_BASE_URL}/activities.json`;

    Promise.props({
        profile: BRequest(profileOptions),
        activitiesToday: BRequest(activitiesTodayOptions),
        steps: BRequest(stepsOptions),
        veryActiveMinutes: BRequest(veryActiveMinutesOptions),
        activities: BRequest(activitiesOptions)
      })
      .then(results => {

        let fitbitData = {
          profile: results.profile[1],
          activitiesToday: results.activitiesToday[1],
          steps: results.steps[1],
          veryActiveMinutes: results.veryActiveMinutes[1],
          activities: results.activities[1]
        };

        res.status(200).send(fitbitData);
      })
      .catch(error => {
        res.status(200).json(error);
      })
  });
};