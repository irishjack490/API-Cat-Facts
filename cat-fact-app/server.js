var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var http = require('http');
//var {parse} = require ('url');
const PORT = 3000;
//const axios = require('axios');


const indexRouter = require('./routes/index');
const catsRouter = require('./routes/cats');
const { resourceLimits } = require('worker_threads');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/cats', catsRouter);


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

app.get('/views/index', (req, res) => {
  res.render('index');
});

//Below works
// app.listen(PORT, () => {
//   console.log(`Server is running!`);
// });

//Below works and shows output in console
// axios.get('https://catfact.ninja/fact')
// .then((response) => {

//   console.log(response.data);
// });

//This does not work, moved it to  routes/cats.js and used fetch instead
// app.get('/cats/fact', (req, res, next) => {
//   axios.get('https://catfact.ninja/fact')
//     .then(response => {
//       const fact = response.data.fact;
//       res.render('cat-fact', { fact });
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     });
// });



module.exports = app;
