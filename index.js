`use strict`;

const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require ('passport')
require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use( //
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //how long it can exist in the browser before it expires
    keys: [keys.cookieKey] // to encrypt our cookie
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT)