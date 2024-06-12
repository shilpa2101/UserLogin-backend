const express = require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {regmodel}=require("./models/register")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://shilpa:shilpa123@cluster0.qb2ryzy.mongodb.net/userapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // res.send("success")
    // console.log(input)

    let reg=new regmodel(input)
    console.log(reg)
    // res.send("model passing success")

    reg.save()

    res.json({"status":"success"})   
   
})


// app.post("/login",(req,res)=>{
//     let input=req.body
//     // res.send("success")
//     // console.log(input)

//     let log=new logmodel(input)
//     console.log(log)
//     // res.send("model passing success")

//     log.save()

//     res.json({"status":"success"})   
   
// })


// app.post("/view",(req,res)=>{
//     coursemodel.find().then(
//         (data)=>{
//             res.json(data)
//         }
//     ).catch(
//         (error)=>{
//             res.json(error)
//         }
//     )
// })


// app.post("/search",(req,res)=>{
//     res.send("welcome to my contact page")
// })

// app.post("/delete",(req,res)=>{
//     res.send("test")
// })

app.listen(8085,()=>{
    console.log("server started")
})