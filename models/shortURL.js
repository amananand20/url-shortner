const mongoose = require("mongoose")

const shorturlSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true
    }
})

const shortCodeModel = mongoose.model('shortCode', shorturlSchema)

module.exports = {shortCodeModel}