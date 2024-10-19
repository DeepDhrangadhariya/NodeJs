const mongoose = require("mongoose")
const crudSchema = mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const crudTable = mongoose.model("crud", crudSchema)

module.exports = crudTable