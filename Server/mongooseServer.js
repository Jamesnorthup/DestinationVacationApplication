const mongoose = require('mongoose')
//const url = 'mongodb://127.0.0.1:27017/street-fighters'
const url = "mongodb+srv://James:ASDasd@cluster0.liktg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true })


const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  ultimate: String
})

module.exports = mongoose.model('Character', characterSchema)