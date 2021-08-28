const express = require("express");
const  app = express();
const morgan  = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/vehiclemarket', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connected to MongoDB");
});

app.get("/getUsers", (req, res) => {
    res.send("Hello Everybody")
})

app.listen(port, () => {
    console.log("Backend Server is Running");
});