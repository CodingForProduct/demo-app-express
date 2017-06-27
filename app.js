// libraries that this app needs
var express = require('express');

// initialize app
var app = express();

// display root route
app.get('/', function (request, response) {
  response.send('Hi.');
});

// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
