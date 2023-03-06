const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require('body-parser'); 
const Medicalrecords = require('./models/Recordsmodel');
const userModel =require('./models/userModels');
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

app.post('/newrecords', async (req, res) => {
  let records = new userModel(req.body);
  let result = await records.save();
  res.send(result)

})
app.post("/:id/reports", async (req, res) => {
  const { hospital, reportNo, disease, medicine, date, time } = req.body;
  
  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newRecord = {
      hospital,
      reportNo,
      disease,
      medicine,
      date,
      time,
    };
    

    user.Reports.push(newRecord);
    await user.save();

    res.json({ message: "Record added to user's Reports array", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


    
 


app.get('/:id/viewrecords', async (req, res) => {
 const user = await userModel.findById(req.params.id);
 res.send(user.Reports)
})



const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
