const adminSchema = require("../model/adminSchema")
const path = require("path")
const fs = require("fs")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jsonwebtoken")

module.exports.loginAdmin = async (req, res) => {
    try {
        let user = await adminSchema.findOne({email: req.body.email})
        if (user) {
            if (bcrypt.compare(req.body.password, user.password)) {
                let token = jwt.sign({ userData: user }, "admin", {expiresIn: "1h"})
                res.status(200).json({ message: "Login Success", token: token })
            } else {
                res.status(400).json({ message: "Invalid Email Or Password" })
            }
        } else {
            res.status(400).json({ message: "User Not Found" })
        }
    } catch (error) {
        res.status(400).json({ message: "Login Error", error: error })
        console.log("Login Error, ", error)
    }
}

module.exports.addAdmin = async (req, res) => {
    try {
        let user = await adminSchema.findOne({email: req.body.email})
        if (user) {
             res.status(300).json({message: "Email already exists."})
        }
    
        req.body.password = await bcrypt.hash(req.body.password, 10)
        req.body.createdAt = moment().format('LLLL')
    
        if (req.file) {
            req.body.image = req.file.filename
        }
    
        const data = await adminSchema.create(req.body)
        res.status(200).json({ message: "Admin Added", data: data })
    } catch (error) {
        res.status(400).json({ message: "Admin Not Added", error: error })
        console.log("AddAdmin Error: ,", error)
    }
}

module.exports.viewAdmin = async (req, res) => {
    try {
        const data = await adminSchema.find({})
        res.status(200).json({ message: "Admin Found", data: data })
    } catch (error) {
        res.status(400).json({ message: "Admin Not Found", error: error })
        console.log("Admin Not Found, ", error)        
    }
}

module.exports.deleteAdmin = async (req, res) => {
    try {
        const imageData = await adminSchema.findById(req.query.id)
        if (imageData.image) {
            const oldImage = path.join(__dirname, "../uploads/", imageData.image)
            fs.unlinkSync(oldImage)
        }
        let data = await adminSchema.findByIdAndDelete(req.query.id)
        res.status(200).json({ message: "Data Deleted", data: data })
    } catch (error) {
        res.status(400).json({ message: "Data Not Deleted", error: error })
        console.log("Data Not Deleted, ", error)
    }
}

module.exports.editAdmin = async (req, res) => {
    try {
        const imageData = await adminSchema.findById(req.query.id)
        if (req.file) {
            if (imageData.image) {
                const oldImage = path.join(__dirname, "../uploads/", imageData.image)
                if (fs.existsSync(oldImage)) {
                    fs.unlinkSync(oldImage)
                }
            }
            req.body.image = req.file.filename
        } else {
            req.body.image = imageData.image
        }
        const data = await adminSchema.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({ message: "Data Edited", data: data })
    } catch (error) {
        res.status(400).json({ message: "Data Not Edited", error: error })
        console.log("Data Not Edited, ", error)
    }
}