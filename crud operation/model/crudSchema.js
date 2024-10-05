const mongoose = require("mongoose")

const crudData = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const crudTable = mongoose.model("UserData", crudData)

module.exports = crudTable