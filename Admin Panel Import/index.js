const express = require("express")
const port = 1008

const app = express()
const path = require("path")

app.use(express.urlencoded())
app.set("view engine", "ejs")

app.use("/", require("./routes"))
app.use("/", express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    try {
        console.log(`Server Started On Port ${port}`)
    } catch (error) {
        console.log("Server Not Connected", error)
    }
})