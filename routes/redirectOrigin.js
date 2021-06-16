const route = require("express").Router

const {getLongURL} = require("../controllers/shortURL")

route.get("/:shortCode", (req, res) => {
    const longURL = await getLongURL(req.params.shortCode)
    if(longURL) {
        res.status(301).redirect(longURL)
    } else {
        res.status(400).json({
            status: "error",
            description: "short url not found"
        })
    }
})

module.exports = {route}