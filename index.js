var app, express, path, port;

express = require('express');

path = require('path');

port = process.env.PORT || 8000;

app = express();

app.use('/', express["static"](__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);

console.log('Server listen on port: ' + port);
