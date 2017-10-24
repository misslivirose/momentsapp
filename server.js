'use strict';
var express = require('express');
var path = require('path');
var azure = require('azure-storage');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();
var _port = process.env.PORT || 1337;

app.set('port', _port);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  
    extended: true
}));


var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
});

app.post('/send', function (req, res) {
    var text = req.body.descriptor;
    var rating = req.body.happiness;
    
});


