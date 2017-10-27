'use strict';
var express = require('express');
var path = require('path');
var azure = require('azure-storage');
var bodyParser = require('body-parser');
var screenfull = require('screenfull');

require('dotenv').config();

if (screenfull.enabled) {screenfull.request()}

var app = express();
var _port = process.env.PORT || 1337;

var TABLE_NAME = "moment";
var SUCCESS_REDIR = "/success.html";
var FAILURE_REDIR = "/failure.html";

app.set('port', _port);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  
    extended: true
}));




var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
});

var tableSvc = azure.createTableService();
var entityGenerator = azure.TableUtilities.entityGenerator;

app.post('/send', function (req, res) {
    var title = req.body.saveAs;
    var text = req.body.descriptor;
    var rating = req.body.pic;

    var task = {
        PartitionKey: entityGenerator.String('emotionEntry'),
        RowKey: entityGenerator.String(title),
        description: entityGenerator.String(text),
        rating: entityGenerator.String(rating)
    };

    tableSvc.insertEntity(TABLE_NAME, task, function (error, result, response) {
        if (!error) {
            console.log("Successfully added entry");
            res.redirect(SUCCESS_REDIR);
        } else {
            console.log(error);
            res.redirect(FAILURE_REDIR);
        }
    });
    
});


