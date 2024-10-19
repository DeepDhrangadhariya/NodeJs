const express = require('express');
const routes = express.Router()
const adminCtrl = require("../controller/adminCtrl")
const multer = require("multer")
const adminAuth = require("../config/adminAuth")

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const uploadPic = multer({storage: diskStorage}).single("image")

routes.get("/viewAdmin", adminCtrl.viewAdmin)

routes.post("/loginAdmin", adminCtrl.loginAdmin)
routes.post("/addAdmin", uploadPic, adminCtrl.addAdmin)

routes.delete("/deleteAdmin", adminCtrl.deleteAdmin)

routes.put("/editAdmin", uploadPic, adminCtrl.editAdmin)

module.exports = routes