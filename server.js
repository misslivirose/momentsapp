'use strict';
var express = require('express');
var path = require('path');
var azure = require('azure-storage');
require('dotenv').config();

var app = express();
var _port = process.env.PORT || 1337;

app.set('port', _port);
app.use(express.static(path.join(__dirname, 'public')));

console.log(process.env.AZURE_STORAGE_ACCESS_KEY);

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
 
});


