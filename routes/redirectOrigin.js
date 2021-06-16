const route = require("express").Router()

const {getLongURL} = require("../controllers/shortURL")

route.get("/:shortCode", async (req, res) => {
    const longURLData = await getLongURL(req.params.shortCode)
    if(longURLData) {
        res.status(301).redirect(longURLData.longURL)
    } else {
        res.status(400).json({
            status: "error",
            description: "short url not found"
        })
    }
})

module.exports = {route}