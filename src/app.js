// personality-factory/src/app.js

const express = require('express');
const app = express();
require('dotenv').config();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// Always wear a helmet
/*
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  }),
);
app.use(helmet.permittedCrossDomainPolicies());
app.use(
  helmet.featurePolicy({
    features: {
      vibrate: ["'none'"],
      payment: ["'none'"],
      syncXhr: ["'none'"],
      notifications: ["'none'"],
      microphone: ["'none'"],
      camera: ["'none'"],
      geolocation: ["'none'"],
    },
  }),
);
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Personality Factory',
  });
});

app.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Signup',
  });
});

app.get('/auth-success', (req, res) => {
  console.log('Auth success!');
  res.redirect('/');
});

app.get('/terms-of-service', (req, res) => {
  console.log('Terms of Service below');
  res.redirect('/');
});

app.get('/privacy-policy', (req, res) => {
  console.log('Privacy policy here');
  res.redirect('/');
});

module.exports = app;
