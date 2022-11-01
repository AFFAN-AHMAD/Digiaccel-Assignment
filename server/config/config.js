const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/web18");
module.exports =connection