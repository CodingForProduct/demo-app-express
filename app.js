// libraries that this app needs
var express = require('express');

// initialize app
var app = express();

// when users visit root route, execute a function that returns "Hi."
app.get('/', function (request, response) {
  response.send('Hi.');
});

// start server on port
app.listen(3000, () => {
  console.log('server started on port 3000');
});
