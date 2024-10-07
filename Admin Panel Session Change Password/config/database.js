const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/Change_Password")
const db = mongoose.connection
db.once("open", () => {
    try {
        console.log("DataBase Connected To Change_Password")
    } catch (error) {
        console.log("Database Error, ", error)
    }
})
module.exports = db