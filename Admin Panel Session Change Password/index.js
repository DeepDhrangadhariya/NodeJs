const express = require("express")
const port = 1015
const app = express()
const db = require("./config/database")
const path = require("path")
const sesstion = require("express-session")
const passport = require("passport")
const localSt = require("./config/passport")

app.use(express.urlencoded())
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(sesstion({
    name: "demo",
    secret: "keyboard",
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 100 * 100 * 60}
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthUser)

app.use("/", require("./routes/index"))

app.listen(port, () => {
    try {
        console.log(`Server Started On Port ${port}!`)
    } catch (error) {
        console.log("Server Error, ", error)
    }
})