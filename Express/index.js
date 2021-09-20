const express = require("express");

const fs = require("fs")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:true}))

const puns = [{"pun":"This is a pun","punchline":"This is punchline"}]


app.get("/pun",function(req,res){
  const index = Math.floor(Math.random() * puns.length)
  res.send(puns[index])
})

app.post("/post",function(req,res){
  puns.push(req.body)
  res.redirect("/")
})


app.listen(3000,()=>{
  console.log("Server is running at port 3000")
})

