// libraries that this app needs
var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var KnexSessionStore = require('connect-session-knex')(session);
var passport = require('passport');
var routes = require('./routes');
var knex = require('./config/database').knex;

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

// cookie, session, passport is for authentication
app.use(cookieParser());

// store session in database
var store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions'
});

var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: store
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies for https
}
app.use(session(sess))
app.use(passport.initialize());
app.use(passport.session());

// bodyParser reads a form's input and stores it in request.body
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

// routes
app.use('/', routes);

// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
