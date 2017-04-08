var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

var app = express();

app.use(bodyParser.json());

MongoClient.connect('mongodb://marcelogando:Twhccdc33f@ds145780.mlab.com:45780/demo', function (err, db) {
    if (err) {
        throw err;
    }

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });

    require('./routes/user.route')(app, db);

    console.log('banco de dados conectado')
});