const mongoose = require("mongoose");
const recordsSchema = new mongoose.Schema({
  hospital:
  {
      type: String,
     
  },
  reportNo:
  {
      type: Number
  },
  disease: {
      type: String
  },
  medicine: {
      type: String
  },
  date: {
      type: String
  },
  time: {
      type: String
  }

});


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  citizenshipno:{
    type: String,
    required:[true,"citizenshipno is required"]
  },
  dob:{
    type:String,
    required: [true,"dob is required"]
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notifcation: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
  Reports:{
    type:[recordsSchema]
  }

  
  
,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
