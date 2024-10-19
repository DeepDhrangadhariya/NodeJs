const adminSchema = require("../model/adminSchema")
const path = require("path")
const fs = require("fs")

module.exports.showData = async (req, res) => {
    const data = await adminSchema.find({})
    try {
        res.status(200).json({message: "Data Found", data: data})
    } catch (error) {
        res.status(404).json({message: "Data Not Found", error: error})
        console.log(error)
    }
}

module.exports.addAdmin = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.filename
        }
        const data = await adminSchema.create(req.body)
        res.status(201).json({ message: "Admin added successfully", data: data })
    } catch (error) {
        res.status(404).json({ message: "Admin Not Added", error })
        console.log(error)
    }
}

module.exports.deleteData = async (req, res) => {
    try {
        const imageData = await adminSchema.findById(req.query.id)
            if(imageData.image) {
                const oldImage = path.join(__dirname, "../uploads/", imageData.image)
                fs.unlinkSync(oldImage)
            }
        const data = await adminSchema.findByIdAndDelete(req.query.id)
        res.status(200).json({ message: "Data Deleted" })
    } catch (error) {
        res.status(400).json({message:"Data Not Deleted", error})
        console.log(error)
    }
}

module.exports.editData = async (req, res) => {
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
        res.status(200).json({message: "Data Edited", data: data})
    } catch (error) {
        res.status(404).json({message: "Data Not Edited", error});
    }
}