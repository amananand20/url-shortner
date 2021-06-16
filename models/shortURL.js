const mongoose = require("mongoose")

const shorturlSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true
    },
    noOfVisits: {
        type: Number,
        required: true,
        default: 0
    },
    lastVisited: {
        type: Number,
        required: true,
        default: Date.now()
    },
    shortCode: {
        type: String,
        required: true
    }
})

const shortCodeModel = mongoose.model('shortCode', shorturlSchema)

module.exports = {shortCodeModel}