//basic template express
var express = require('express');
var app = express();
var port = 4001;
app.get('/', function(req, res) {
    res.send('Hello World');
});
app.post('/login', function(req, res) {
    
    res.send('Hello World');
});
app.listen(port);
console.log('Server running at http://localhost:' + port);
