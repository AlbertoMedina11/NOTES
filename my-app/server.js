const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://albertomedinagardea:Peluche12@cluster0.5fsssds.mongodb.net/notesDB")

app.use("/", require("../routes/noteRoutes"))



app.listen(3001, function(){
    console.log("express server is running in port 3001");
});