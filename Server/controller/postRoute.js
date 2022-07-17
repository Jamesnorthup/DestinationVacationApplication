const ObjectId = require('mongodb').ObjectId;
const VacationDB = require( '../connection.js' );

module.exports.Destination = function(req, res) {
            const destinationCollection = VacationDB.getDb().collection('Destinations')
            res.send(req.body)
            destinationCollection.insertOne(req.body)
                .catch(error => console.error(error))
      
 }

