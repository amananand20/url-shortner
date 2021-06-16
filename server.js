const express = require("express")

const app = express()

const PORT = process.env.PORT || 6666
const {db} = require("./config/db")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () => {
    console.log("server started at port : ", PORT)
})