const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors = require("cors")
const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(8080,()=>{console.log('server is running on http://localhost:8080')}) 