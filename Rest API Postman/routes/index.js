const express = require("express")
const routes = express.Router()
const adminCtrl = require("../controller/adminCtrl")
const multer = require("multer")

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const uploadPic = multer({storage: diskStorage}).single("image")

routes.get("/", adminCtrl.showData)
routes.post("/addAdmin", uploadPic, adminCtrl.addAdmin)
routes.delete("/deleteData", adminCtrl.deleteData)
routes.put("/editData", uploadPic, adminCtrl.editData)

module.exports = routes