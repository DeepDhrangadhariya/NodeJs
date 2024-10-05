const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/AdminPanel_Login")
const db = mongoose.connection

db.once("open", () => {
    try {
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Database Not Connected ", error)
    }
})

module.exports = db