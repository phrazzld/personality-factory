// personality-factory/src/app.js

const express = require('express');
const app = express();
require('dotenv').config();
const config = require('@root/config');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

// Always wear a helmet
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {},
  }),
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log('GET /');
  // TODO: render splash if logged out, account if logged in
  res.render('home', {
    title: 'Personality Factory',
  });
});

app.get('/splash', (req, res) => {
  console.log('GET /splash');
  res.render('splash', {
    title: 'Splash',
  });
});

// TODO: Manage user object more intentionally
app.post('/login', (req, res) => {
  console.log('POST /login');
  res.redirect('/');
});

app.get('/account', (req, res) => {
  console.log('GET /account');
  res.render('account', {
    title: 'Account',
  });
});

module.exports = app;
