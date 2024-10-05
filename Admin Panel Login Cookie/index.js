const express = require("express")
const port = 1011

const app = express()
const path = require("path")
const db = require("./config/database")
const cookieParser = require("cookie-parser")

app.use(express.urlencoded())
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use(cookieParser())

app.use("/", require("./routes/index"))

app.listen(port, () => {
    try {
        console.log(`Server Started On Port ${port}`)
    } catch (error) {
        console.log("Server Error", error)
    }
})