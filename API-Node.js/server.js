var http = require('http');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var listener = 80;

var server = http.createServer(app);
server.listen(listener);

var path = require("path");

app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.status(200);
    res.send("La racine de l'API répond");
});
