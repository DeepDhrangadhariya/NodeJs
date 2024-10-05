const express = require("express")
const port = 1001

const app = express()
const db = require("./config/database")
const crudSchema = require("./model/crudSchema")

app.set("view engine", "ejs")
app.use(express.urlencoded())

app.get("/", async (req, res) => {
    let data = await crudSchema.find({})
    data ? res.render("index", {data}) : console.log("Data Not Found");
})

app.post("/insert", async (req, res) => {
    let data = await crudSchema.create(req.body)
    data ? res.redirect("back") : console.log("Data Not Submitted");
})

app.get("/deleteData", async (req, res) => {
    let deletedData = await crudSchema.findByIdAndDelete(req.query.id)
    deletedData ? res.redirect("back") : console.log("Data Not Deleted");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server Started On Port ${port}`);
})