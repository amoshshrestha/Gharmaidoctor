const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require('body-parser'); 
const Medicalrecords = require('./models/Recordsmodel');
const userModel =require('./models/userModels');
const multer= require('multer');
dotenv.config();


//mongodb connection
connectDB();

//rest obejct
const app = express();
const fileStorageEngine=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'./images')
  },
  filename:(req,file,cb)=>{
      cb(null,Date.now()+"-"+file.originalname)
  },
})
const upload=multer({storage:fileStorageEngine})
//middlewares
app.use(express.json());
app.use(moragan("dev"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.use('/images',express.static('./images'))
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

app.post('/citizenshipfie',upload.single('citizenship'),(req,res)=>{
  console.log("called")
  let data=new userModel({
      citizenship:req.file.path,
  })
  data.save()
  .then(result=>{
      res.send("succesfully added")
  })
  .catch(error=>{
      console.log(error)
  })
})
app.post('/citizenshipfile',upload.single('citizenship'),(req,res)=>{
  let data=new userModel ({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      citizenshipno:req.body.citizenshipno,
      date:req.body.date,
      citizenship:req.file.path,
  })
  data.save()
  .then(result=>{
      res.send("succesfully added")
  })
  .catch(error=>{
      console.log(error)
  })
})   
 


app.get('/:id/viewrecords', async (req, res) => {
 const user = await userModel.findById(req.params.id);
 res.send(user.Reports)
})

app.put("/updateuserstatus",async (req, res) => {
  
  const data= userModel.findOne({_id:req.body.userId});
  if(data){
    let result= await userModel.updateOne({_id:req.body.userId},{$set:{status:req.body.status}})
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: result,
    });
  }

})


const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
