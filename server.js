const express = require('express');
const app =express();

// get ,post ,delet, put, patch

//========== All mathod and all path =========
// app.all("*",(req ,res)=>{
//     res.send('<h1>Hellow Frome Express</h1>')
// })

app.get("/home",(req,res)=>{
    res.send("<h1>Hellow frome Get mathod</h1>")
})

app.post("/about",(req,res)=>{
    res.send("<h1>Hellow frome Post mathod</h1>")
})

app.put("/contact",(req,res)=>{
    res.send("<h1>Hellow frome Put mathod</h1>")
})

app.patch("/servise",(req,res)=>{
    res.send("<h1>Hellow frome Patch mathod</h1>")
})

app.delete("/location",(req,res)=>{
    res.send("<h1>Hellow frome Delet mathod</h1>")
})


app .listen(8000,()=>{
    console.log("Server is Running");
})