const mongoose = require("mongoose")

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/test'

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to DB")
});

module.exports = {
    db
}