//console.log("Hello Everyone");
const express = require("express");
const mongoose =require("mongoose");
const routes=require("./Routes/route");

const app=express();
app.use(express.json());

app.use("/",routes);
//Db connection
mongoose
.connect(
    "mongodb+srv://ankushrp2004:ankush123@cluster0.nvbesvi.mongodb.net/internship-batch3"
)
.then(()=>{
    console.log("Database is connected successfully");
})
.catch((err)=>{
    console.log(err,"something went wrong");
})
//Test Api
app.get("/test",(req,res)=>{
    res.send("Hello Everyone, This is Test Api ");
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});