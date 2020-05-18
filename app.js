const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const transferRouter = require('./routes/api/v1/transfer');
const apiTransactionsRouter = require("./routes/api/v1/cryptovibes");

const passport = require('./passport/passport');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); //warning nieuwe syntax oplossen, laten staan
mongoose.connect(process.env.dbconn || config.get('Database.conn'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log("connection success 😁");
})
.catch ((err) => {
  console.log(`error: ${err} 😢`);
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', usersRouter);
app.use('/signup', usersRouter);
app.use('/transfer', transferRouter);
app.use("/api/v1/cryptovibes", passport.authenticate('jwt', { session: false }),apiTransactionsRouter);

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

module.exports = app;
