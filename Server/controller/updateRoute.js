

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());
const ObjectId = require('mongodb').ObjectId;




// var bodyParser = require('body-parser');
// app.use(bodyParser.json())
const VacationDB = require('../connection.js');

module.exports.Destination = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Destinations')
    destinationCollection.findOneAndUpdate(
      //  { _id: ObjectId(req.body._id) }, {

        { _id: ObjectId(req.body.id) }, {
        $set: {
            name: req.body.name,
            location: req.body.location,
            photo: req.body.photo,
            description: req.body.description
     
        }
    },
        { upsert: true }
    ).then(result => { res.json('Success') })
        .catch(error => console.error(error))
}

module.exports.Weather = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Current_Weather')
    destinationCollection.findOneAndUpdate(
        { _id: "CURRENT_WEATHER" }, {
        $set: {
            CityName: req.body.CityName,
            Description: req.body.Description,
            Temp: req.body.Temp,
            windspeed: req.body.windspeed
        }
    },
        { upsert: true }
    ).then(result => { res.json('Success') })
        .catch(error => console.error(error))
}





module.exports.Card = function (req, res) {

    const destinationCollection = VacationDB.getDb().collection('Current_Card')
    destinationCollection.findOneAndUpdate(

        { _id: "CURRENT_CARD" },
        {
            $set: {

                name: req.body.name,
                location: req.body.location,
                photo: req.body.photo,
                description: req.body.description

            }
        },
        { upsert: true }
    ).then(result => { res.json('Success') })
        .catch(error => console.error(error))
}




