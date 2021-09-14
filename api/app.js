var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var groupRouter = require('./routes/grupos');
var countryRouter = require('./routes/paises');
var commentsRouter = require('./routes/comentarios');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/grupos', groupRouter);
app.use('/paises', countryRouter);
app.use('/comentarios', commentsRouter);

module.exports = app;

//https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/
//https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/