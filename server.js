const express = require("express")

const app = express()

const PORT = process.env.PORT || 6666
const {db} = require("./config/db")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", require("./routes/redirectOrigin").route)
app.use("/api/create", require("./routes/api/createShortURL").route)

app.listen(PORT, () => {
    console.log("server started at port : ", PORT)
})