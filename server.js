const express = require("express");

const app = express();

const PORT = process.env.PORT || 4242;
const {db} = require("./config/db");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/home", express.static(__dirname + "/public"));

app.use("/", require("./routes/redirectOrigin").route);
app.use("/api/create", require("./routes/api/createShortURL").route);

app.listen(PORT, () => {
    console.log("server started at port : ", PORT);
    console.log("http://localhost:6666");
})