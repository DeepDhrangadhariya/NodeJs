const adminschema = require("../model/adminSchema")
const fs = require("fs")
const path = require("path")

module.exports.dashboard = (req, res) => {
    try {
        res.render("dashboard")
    } catch (error) {
        console.log("Error On Rendering Dashboard Page: ", error)
    }
}

module.exports.addAdmin = async (req, res) => {
    try {
        res.render("addAdmin")
    } catch (error) {
        console.log("Error On Rendering AddAdmin Page: ", error)
    }
}

module.exports.viewAdmin = async (req, res) => {
    try {
        const formData = await adminschema.find({})
        // formData ? res.render("viewAdmin", {formData}) : console.log("Data Not Found")
        if(formData) {
            try {
                res.render("viewAdmin", {formData})
            } catch (error) {
                console.log("Data Not Found: ", error)
            }
        }
    } catch (error) {
        console.log("Error On Rendering ViewAdmin Page: ", error)
    }
}

module.exports.insert = async (req, res) => {
    try {
        req.body.image = req.file.filename
        await adminschema.create(req.body)
        res.redirect('/addAdmin')
    } catch (error) {
        console.log("Data Not Subbmited: ", error)
    }
}

module.exports.deleteData = async (req, res) => {
    try {
        const imgData = await adminschema.findById(req.query.id)
        const oldImg = path.join(__dirname, "../uploads/", imgData.image)
        fs.unlinkSync(oldImg)

        await adminschema.findByIdAndDelete(req.query.id)
        res.redirect("/viewAdmin")
    } catch (error) {
        console.log("Data Not Deleted: ", error)
    }
}

module.exports.editData = async (req, res) => {
    try {
        const formData = await adminschema.findById(req.query.id)
        if(formData) {
            try {
                res.render("editAdmin", {formData})
            } catch (error) {
                console.log("Data Not Found: ", error)
            }
        }
    } catch (error) {
        console.log("Erro On Rendering Edit Page: ", error)
    }
}

module.exports.updateData = async (req, res) => {
    try {
        const imgData = await adminschema.findById(req.query.id)
        if (req.file) {
            if (imgData.image) {
                const oldImg = path.join(__dirname, "../uploads/", imgData.image)
                if (fs.existsSync(oldImg)) {
                    fs.unlinkSync(oldImg)
                }
            }
            req.body.image = req.file.filename
        } else {
            req.body.image = imgData.image
        }

        await adminschema.findByIdAndUpdate(req.query.id, req.body)
        res.redirect("/viewAdmin")
    } catch (error) {
        console.log("Data Not Updated: ", error)
    }
}