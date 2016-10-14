var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var list = require('./routes/list');
var user = require('./routes/user');
var config = require('./bin/config');
var app = express();
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var cors = require('cors');
mongoose.connect(config.connectionString);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(function(req,res,next){
  if(!_.includes(config.excludeRoutes,req.path)){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log(req.path);
    if(token){
      jwt.verify(token, config.cipherSalt, function(err, decoded) {
        if(err){
          console.log(err);
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        }
        else{
          req.authToken = decoded;
          next();
        }
      });
    }
    else{
      return res.status(403).send({ success:false,message:"Empty Token"});
    }
  }
  else{
    next();
  }
});
app.use('/', routes);
app.use('/list', list);
app.use('/user',user);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
