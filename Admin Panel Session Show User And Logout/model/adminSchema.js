const mongoose = require("mongoose")
const adminSchema = mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const adminTable = mongoose.model("admin", adminSchema)
module.exports = adminTable