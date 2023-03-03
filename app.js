var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

const mongo = require('./config/db.config');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const {usersRouter, categoryRouter, postRouter, authRouter} = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/category', categoryRouter);
app.use('/api/post', postRouter);

module.exports = app;
