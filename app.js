const express = require("express");
const app = express();
//mongodb+srv://jamesjoel:<password>@cluster0.8lcs5.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jamesjoel:jamesjoel@cluster0.8lcs5.mongodb.net/mydb");

const Teacher = mongoose.Schema({
    name : String,
    age : String
});

const TeacherModel = mongoose.model("teacher", Teacher);


app.get("/api/teacher", async(req, res)=>{
    let result = await TeacherModel.find();
    console.log(result);
    res.send(result);
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port ", port)
})