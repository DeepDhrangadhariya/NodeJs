const express = require("express");

const app = express()

app.set("view engine", "ejs")

let toDoList = [
    {
        task : "first task"
    },
    {
        task : "second Task"
    },
    {
        task : "third Task"
    }
]

app.get("/", (req, res) => {
    res.render("todos", {
        lists : toDoList
    })
})

app.listen(2000, () => {
    console.log("Server Is Runnig On 2000")
    console.log(toDoList)
})