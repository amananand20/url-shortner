const route = require("express").Router()

const {createShortURL} = require("../../controllers/shortURL")
const {ifLongURLAvailable, validateShortCode} = require("../../middlewares/middleware")

route.post("/", ifLongURLAvailable, validateShortCode, (req, res) => {
    createShortURL(req.body)
    res.status(201).json({
        status: "success",
        shortCode: req.body.shortCode
    })
})

module.exports = {route}