const express = require('express');
const routes = express.Router()
const adminCtrl = require("../controller/adminCtrl")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " - " + file.originalname)
    }
})

const uploadPic = multer({storage:storage}).single("image")

routes.get("/", adminCtrl.dashboard)
routes.get("/addAdmin", adminCtrl.addAdmin)
routes.get("/viewAdmin", adminCtrl.viewAdmin)
routes.get("/deleteData", adminCtrl.deleteData)
routes.get("/editData", adminCtrl.editData)

routes.post("/insert", uploadPic, adminCtrl.insert)
routes.post("/updateData", uploadPic, adminCtrl.updateData)

module.exports = routes