const express = require("express")
const app = express()


app.post("/ajax",(req, res)=>{
    console.log(req)
    res.send("Test")
})

app.listen(3300)