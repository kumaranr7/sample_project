const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');

const carsRoute = require('./routes/cars');

app.use(bodyParser.json());
app.use(cors());
app.use('/cars', carsRoute);

app.get('/test',(req,res)=>{
    res.send("Hello API...!!")
});


mongoose.connect("mongodb://mongo:xKr3i8VAlqzKGI4BGHFl@containers-us-west-124.railway.app:7174", ()=>{
    console.log("Database is connected")
})

app.listen(5000)