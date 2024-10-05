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
                res.cookie("adminData", user)
                res.redirect("/dashboard")
            } else {
                console.log("Incorrect Password")
                return res.redirect("/")
            }
        } else {
            console.log("User Not Found")
            return res.redirect("/")
        }
    } catch (error) {
        console.log("Error On Login User, ", error)
    }
}

module.exports.logOut = (req, res) => {
    res.clearCookie("adminData")
    res.redirect("/")
}

module.exports.dashboard = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                res.render("dashboard")
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Error On Rendering Dashboard, ", error)
    }
}

module.exports.addAdmin = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                res.render("addAdmin")
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Error On Rendering AddAdmin, ", error)
    }
}


module.exports.viewAdmin = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                const formData = await adminSchema.find({})
                if (formData) {
                    try {
                        res.render("viewAdmin", {formData})
                    } catch (error) {
                        console.log("Data Not Found, ", error)
                    }
                }
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Error On Rendering ViewAdmin, ", error)
    }
}


module.exports.insert = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                req.body.image = req.file.filename
                await adminSchema.create(req.body)  
                res.redirect("/addAdmin")
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Data Not Subbmited, ", error)
    }
}

module.exports.deleteData = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                const imageData = await adminSchema.findById(req.query.id)
                if (req.file) {
                    if (imageData.image) {
                        const oldImage = paht.join(__dirname, "../uploads/", imageData.image)
                        fs.unlinkSync(oldImage)
                    }
                }
                await adminSchema.findByIdAndDelete(req.query.id)
                res.redirect("/viewAdmin")
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Data Not Deleted, ", error)
    }
}

module.exports.editData = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
                const formData = await adminSchema.findById(req.query.id)
                if (formData) {
                   try {
                     res.render("editAdmin", {formData})
                   } catch (error) {
                    console.log("Data Not Found, ", error)
                   }
                }
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Error On Rendering EditAdmin, ", error)
    }
}

module.exports.updateData = async (req, res) => {
    try {
        if (req.cookies.adminData == undefined) {
            return res.redirect("/")
        } else {
            const adminData = await adminSchema.findById(req.cookies.adminData._id)
            if (adminData) {
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
            } else {
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("Data Not Updated, ", error)
    }
}