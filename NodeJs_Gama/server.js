var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var _db = null


var app = express() 
app.use(bodyParser.json())


app.get('/api/user', function (req, res) {

    _db.collection('teste').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });

});

app.post('/api/user', function (req, res) {

    try {
        var collection = _db.collection('teste')

        collection.save(req.body)
            .then(function (result) {
                res.send(result)
            })
            .catch(function (error) {
                console.log(error)
                res.status(500).send(error)
            })

    } catch (error) {
        res.status(500).send(error)

    }



});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

MongoClient.connect('mongodb://marcelogando:Twhccdc33f@ds145780.mlab.com:45780/demo', function (err, db) {
    if (err) {
        throw err;
    }

    _db = db

    console.log('banco de dados conectado')
});