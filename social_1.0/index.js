const express=require('express')
const fs=require('fs')
const app=express()

const port=5000
let jsonData = require('./data/chat.json');
console.log(jsonData);


console.log(jsonData.name)
app.listen(port,function(req,res){

console.log("avviato in porta "+port)

})