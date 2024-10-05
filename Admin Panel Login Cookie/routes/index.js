const express = require("express")
const routes = express.Router()
const adminCtrl = require("../controller/adminCtrl")
const multer = require("multer")

const dStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "- " + file.originalname)
    }
})

const uploadPic = multer({storage: dStorage}).single("image")

routes.get("/", adminCtrl.loginAdmin)
routes.get("/logOut", adminCtrl.logOut)
routes.get("/dashboard", adminCtrl.dashboard)
routes.get("/addAdmin", adminCtrl.addAdmin)
routes.get("/viewAdmin", adminCtrl.viewAdmin)
routes.get("/loginAdmin", adminCtrl.loginAdmin)
routes.get("/deleteData", adminCtrl.deleteData)
routes.get("/editData", adminCtrl.editData)

routes.post("/userLogin", adminCtrl.userLogin)
routes.post("/insert", uploadPic, adminCtrl.insert)
routes.post("/updateData", uploadPic, adminCtrl.updateData)

module.exports = routes