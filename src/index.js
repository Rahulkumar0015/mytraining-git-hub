const express = require('express');
const router = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const connection = require("./db");
const multer= require("multer");

app.use(express().json());
app.use( multer().any())
app.use(express().urlencoded({ extended: true }));




// database connection
connection();


app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});