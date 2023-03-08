import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

function Confirm(props) {
  const fee = parseInt(props.Fees);
   const tax = 0.13 * fee;
   const Total = tax + fee;
   const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
   const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  return (
    <div className='d-flex' style={{justifyContent:'center'}}>
    <Card style={{ width: '60rem'}}>
      <Card.Body className='d-flex'>
        <div style={{display:'flex', flexDirection:'column' ,alignItems:'flex-start'}}>
          <div className='d-flex'>
      <Card.Img variant="top" src={props.imgsrc} style={{ height: '140px', width: '140px', borderRadius: '75px', marginRight: '24px' }} />
        <div style={{ display: 'flex', flexDirection: 'column',alignItems:'flex-start' }}>
          <Card.Title style={{ fontSize: '2rem',fontFamily:'Monaco', fontWeight: 'bold', marginBottom: '0.75rem' }}>{props.name}</Card.Title>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Specialty}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Timing}</Card.Text>
        </div>
        </div>
        <div className='d-flex' style={{flexDirection:'column', alignItems:'flex-start', marginTop:'3 0px'}}>
        <Card.Title style={{ fontSize: '29px',fontFamily:'Monaco', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Details</Card.Title>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Date:{props.date}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Time:{props.time}</Card.Text>
            </div>
            </div>
            
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end',marginLeft:'20rem',marginTop:'10rem'}}>

            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Doctor Fee:Rs.{fee}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Tax:Rs.{tax}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Total Fee:Rs.{Total}</Card.Text>
            <Button variant="primary" onClick={handleBooking} style={{ fontSize: '19px', fontWeight: 'bold',padding:'15px', width: '250px'}}>Confirm Appointment</Button>
            </div>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default Confirm;

