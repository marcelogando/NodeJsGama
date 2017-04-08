module.exports = function (app, db) {
    app.get('/api/user', function (req, res) {

        db.collection('teste').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
        });

    });

    app.post('/api/user', function (req, res) {

        try {
            var collection = db.collection('teste')

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
}
