const mongoose = require("mongoose")
const adminSchema = mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    name: {
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
    createdAt: {
        type: String,
        required: true
    }
})

const adminTable = mongoose.model("Admin", adminSchema)

module.exports = adminTable