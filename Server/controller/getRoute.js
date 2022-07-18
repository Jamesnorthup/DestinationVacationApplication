
const VacationDB = require('../connection.js');

module.exports.Destination = function (req, res) {
    const destinationCollection = VacationDB.getDb().collection('Destinations')
    destinationCollection.find().toArray().then(results => {
        res.json({ message: "Success", results: results })
    }).catch(/* ... */)
}

module.exports.Weather = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Current_Weather')

    destinationCollection.find().toArray().then(results => {
        res.json({ message: "Success", results: results })
    }).catch(/* ... */)
}

module.exports.Card = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Current_Card')

    destinationCollection.find().toArray()
        .then(results => {

            res.json({ message: "Success", results: results })
        })
        .catch(error => console.error(error))

}

