const express = require("express");
const port = 1009

const app = express()
const path = require("path")
const db = require("./config/database")

app.use(express.urlencoded())
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/index"))

app.listen(port, () => {
    try {
        console.log(`App listening on port ${port}`);
    } catch (error) {
        console.log(error)
    }
});