const path = require("path")
const express = require("express")
const e = require("express")
const app = express()
app.all("/",(req, res)=>{
    //res.send("<h1>Hola bebe</h1>")
    console.log(path.join(__dirname + "/node.html"))
    res.sendFile(path.join(__dirname + "/node.html"))
})

app.listen(3000)
console.log("Server is running pretty smooth")