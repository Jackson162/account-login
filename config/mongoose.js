//import mongoose
const mongoose = require('mongoose')
//connect DB
mongoose.connect('mongodb://localhost/log-in', { useNewUrlParser: true, useUnifiedTopology: true })
//get connection status
const db = mongoose.connection
//listen to connection error
db.on('error', () => {
    console.log('connection error')
})
//report successful connection
db.once('open', () => {
    console.log('mongooseDB is connected.')
})

module.exports = db