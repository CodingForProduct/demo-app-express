// libraries that this app needs
var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var routes = require('./routes');

// initialize app
var app = express();

// add layout support
app.use(expressLayouts);
// specifiy location of layout file
app.set('layout', path.join(__dirname, 'views', 'layouts', 'layout'));

// set the type of template that the app will use
app.set('view engine', 'ejs');
// set the directory for the templates
app.set('views', path.join(__dirname, 'views'));

// set the folder for  static assets
app.use(express.static(path.join(__dirname, 'public')));

// cookie and session is for authentication
app.use(cookieParser());
var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies for https
}
app.use(session(sess))

// bodyParser reads a form's input and stores it in request.body
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

// routes
app.use('/', routes);

// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
