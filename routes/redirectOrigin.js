const route = require("express").Router

const {getLongURL} = require("../controllers/shortURL")

route.get("/:shortCode", (req, res) => {
    res.status(301).redirect(await getLongURL(req.params.shortCode))
})

module.exports = {route}