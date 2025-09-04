const mongoose = require("mongoose");
const student = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  password: {
    type: String,
  },
  phnumber:{
    type: String
  },
  gender:{
    type:String
  },
  address:{
    type:String
  },
});

let model = mongoose.model("Users", student);
module.exports = model;
