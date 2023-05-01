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
  },
  report:{
    type: String
  },

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
  },
  date:{
    type:String,
  },
 phno:{
  type:Number,
  
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
  citizenship:{
    type:String,
  },
  status: {
    type: String,
    default: "pending",
  },
  Reports:{
    type:[recordsSchema]
  }

  
  
,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
