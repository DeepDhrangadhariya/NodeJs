const express = require("express")
const port = 1012
const app = express()
const db = require("./config/database")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const localSt = require("./config/passport")

app.use(express.urlencoded())
app.set("view engine", "ejs")

app.use(session({
    name: "demo",
    secret: "keyboard",
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 100 * 100 * 60}
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/index"))

app.listen(port, () => {
    try {
        console.log(`App listening on port ${port}!`);
    } catch (error) {
        console.log("Server Not Connected!!, ", error)
    }
});