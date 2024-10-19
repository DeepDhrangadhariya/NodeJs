const express = require('express');
const port = 1021
const app = express()
const db = require('./config/database')
const path = require('path')

app.use(express.urlencoded())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/index"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started On Port " + port)
})