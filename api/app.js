var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/getalldata');
var filterRouter = require('./routes/getfiltereddata');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use("/", indexRouter);
app.use("/getalldata", usersRouter);
app.use("/getfiltereddata", filterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app.use(compression());
//app.use(morgan('common'));

//production. To serve front end from node app
var dev = app.get('env') !== "production";
console.log("dev: ", dev);
if (!dev) {
  app.disable('x-powered-by'); //makes it harder
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

module.exports = app;
