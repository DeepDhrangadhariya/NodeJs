const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/Rest_API_Postman")
const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log(err) : console.log("Database Connected")
})

module.exports = db