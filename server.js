const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({path:"./config/config.env"})

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",(req,res)=>{
    console.log(req.body);

    res.send("signup Successful");
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})