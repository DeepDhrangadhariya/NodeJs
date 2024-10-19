const express = require('express');
const port = 1022
const app = express()
const db = require("./config/database")
const path = require("path")

app.use(express.urlencoded())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/index"))

app.listen(port, () => {
    try {
        console.log("Server Started On Port " + port)
    } catch (error) {
        console.log("Server Not Started, ",error)
    }
})