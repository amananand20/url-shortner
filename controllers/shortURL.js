const mongoose = require("mongoose")

const {shortCodeModel} = require("../models/shortURL")

const createShortURL = (body) => {
    shortCodeModel.create({
        longURL: body.longURL,
        shortCode: body.shortCode
    }, (err, data) => {
        if(err) {
            console.log("Error in inserting data in DB : ", err)
        } else {
            console.log("Insertion done : ", data)
        }
    })
}

const getLongURL = async (shortCode) => {
    return await shortCodeModel.findOne({
        shortCode: shortCode
    }, (err, data) => {
        if(err) {
            console.log("Error retriving data from DB : ", err)
        } else {
            return data
        }
    })
}

const getShortCode = async (longURL) => {
    return await shortCodeModel.findOne({
        longURL: longURL
    }, (err, data) => {
        if(err) {
            console.log("Error retriving data from DB : ", err)
        } else {
            return data
        }
    })
}

module.exports = {
    createShortURL,
    getLongURL,
    getShortCode
}