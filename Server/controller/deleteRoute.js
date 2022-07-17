const VacationDB = require('../connection.js');
const ObjectId = require('mongodb').ObjectId;

module.exports.Destination = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Destinations')

    destinationCollection.deleteOne(
        { _id: ObjectId(req.body.id) }
    ).then(result => {
        if (result.deletedCount === 0) {
            return res.json('No location to delete')
        }
        res.json(`Deleted Location`)
    })
        .catch(error => console.error(error))

}