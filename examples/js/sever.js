var fs = require('fs');

var options = {
  key: fs.readFileSync('privatekey.key'),
  cert: fs.readFileSync('certificate.crt')
};


var express = require('express');
var path = require('path');
var app = express();

var server = require('https').createServer(options, app);

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3001);
app.listen(8087);