import Corouselspec from "../components/corouselowl";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Navmain from "../components/navbar";
import Doctorcard from "../components/doccard";
import { Row } from "antd";
import { Container } from "react-bootstrap";
const OnlineConsultation =()=>{
    const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  
  
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
return(
    <div className="OnlineConsultation">
<Navmain/>
<Container className="d-flex justify-content-center"><img src="images/Bookappointment.jpg"  style={{paddingTop:'80px',width:'900px'}}/></Container>
<Container className="d-flex justify-content-center" style={{fontSize:'60px', }}>OnlineConsultation</Container>
<h2 className="d-flex" style={{justifyContent:'center'}}>Browse by Speciality:</h2>
<Corouselspec/>
<h2 className='d-flex'style={{paddingLeft:"30px",justifyContent:'center'}}>Browse by Doctors</h2>
<div className="d-flex justify-content-between">
<Row>
        {doctors && doctors.map((doctor) => <Doctorcard doctor={doctor} />)}
      </Row>


</div>

    </div>

);

}
export default OnlineConsultation;