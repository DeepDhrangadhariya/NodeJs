const adminSchema = require("../model/adminSchema")
const path = require("path")
const fs = require("fs")

module.exports.loginAdmin = (req, res) => {
    try {
        res.render("loginAdmin")
    } catch (error) {
        console.log("Error On Rendering LoginAdmin, ", error)
    }
}

module.exports.userLogin = async (req, res) => {
    try {
        const user = await adminSchema.findOne({ email: req.body.email })
        if (user) {
            if (user.password == req.body.password) {
                return res.redirect("/dashboard")
            } else {
                console.log("User Not Found")
                res.redirect("/")
            }
        } else {
            console.log("User Not Found")
            res.redirect("/")
        }
    } catch (error) {
        console.log("Login Error, ", error)
    }
}

module.exports.logOut = (req, res) => {
    req.session.destroy((error) => {
        error ? console.log("Logout Error, ", error) : res.redirect("/")
    })
}

module.exports.dashboard = (req, res) => {
    try {
        res.render("dashboard")
    } catch (error) {
        console.log("Error On Rendering Dashboard, ", error)
    }
}

module.exports.addAdmin = (req, res) => {
    try {
        res.render("addAdmin")
    } catch (error) {
        console.log("Error On Rendering AddAdmin, ", error)
    }
}

module.exports.viewAdmin = async (req, res) => {
    try {
        const formData = await adminSchema.find({})
        if (formData) {
            try {
                res.render("viewAdmin", {formData})
            } catch (error) {
                console.log("Data Not Found, ", error)
            }
        }
    } catch (error) {
        console.log("Error On Rendering ViewAdmin, ", error)
    }
}

module.exports.insert = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.filename
        }
        await adminSchema.create(req.body)
        res.redirect("/addAdmin")
    } catch (error) {
        console.log("Data Not Submited, ", error)
    }
}

module.exports.deleteData = async (req, res) => {
    try {
        const imageData = await adminSchema.findById(req.query.id)
        if (imageData.image) {
            const oldImage = path.join(__dirname, "../uploads/", imageData.image)
            fs.unlinkSync(oldImage)
        }
        await adminSchema.findByIdAndDelete(req.query.id)
        res.redirect("/viewAdmin")
    } catch (error) {
        console.log("Data Not Deleted, ", error)
    }
}

module.exports.editData = async (req, res) => {
    try {
        const formData = await adminSchema.findById(req.query.id)
        if (formData) {
            try {
                res.render("editAdmin", {formData})
            } catch (error) {
                console.log("Id Not Available, ", error)
            }
        }
    } catch (error) {
        console.log("Error On Rendering EditAdmin, ", error)
    }
}

module.exports.updateData = async (req, res) => {
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
        await adminSchema.findByIdAndUpdate(req.query.id, req.body)
        res.redirect("/viewAdmin")
    } catch (error) {
        console.log("Data Not Updated, ", error)
    }
}