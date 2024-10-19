const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1/Rest_API_Authentication_JWT")
const db = mongoose.connection
db.once("open", () => {
    try {
        console.log("DataBase Connected")
    } catch (error) {
        console.log("DataBase Error, ",error)
    }
})

module.exports = db