const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require('body-parser'); 
const Medicalrecords = require('./models/Recordsmodel');
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
  let records = new Medicalrecords(req.body);
  let result = await records.save();
  res.send(result)

})
app.get('/viewrecords', async (req, res) => {
 data=await Medicalrecords.find()
 res.send(data)
})



const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
