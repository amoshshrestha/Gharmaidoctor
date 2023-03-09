import React from "react";
import { useState } from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Image from "react-bootstrap/esm/Image";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [citizenship, setCitizenship] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [citizenshipno, setCitizenshipno] = useState(undefined);
  const [phno, setPhno] = useState(undefined);
function handleImage(e) {
    setCitizenship(e.target.files[0]);
  }

  const callapi = async(e) => {

    try {
      dispatch(showLoading());
    
    

  const userobj = new FormData();
    userobj.append("name", name);
    userobj.append("email", email);
    userobj.append("password", password);
    userobj.append("citizenshipno", citizenshipno);
    userobj.append("date", date);
    userobj.append("phno", phno);
    userobj.append("citizenship", citizenship);
    const res= await axios.post("/api/v1/user/register", userobj)

      dispatch(hideLoading());
      

      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  }
      

    

  // //form handler
  // const onfinishHandler = async (values) => {
  //   try {
  //     dispatch(showLoading());
   
  //   const res= await axios.post("/api/v1/user/register", values)

  //     dispatch(hideLoading());
  //     if (res.data.success) {
  //       message.success("Register Successfully!");
  //       navigate("/login");
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //     message.error("Something Went Wrong");
  //   }
  // };
  return (
    <>
      <div className="form-container " style={{marginTop:"80px"}}>
        <Form
          layout="vertical"
          onFinish={callapi}
          className="register-form"
        >
          <Image src="images/logofinale.png" width='350' height='70'/>
          <h3 className="text-center">Register</h3>
          <Form.Item label="Name" name="name">
          <Input required type="text" placeholder="Enter Name" value={name}
          onChange={(e) => setName(e.target.value)} />

          </Form.Item>
          <Form.Item label="Email" name="email">
          <Input required type="email" placeholder="Enter Email" value={name}
          onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password" name="password">
          <Input required type="password" placeholder="Enter Password" value={name}
          onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Phone Number" name="phno">
          <Input required type="text" placeholder="Enter Phone Number" value={name}
          onChange={(e) => setPhno(e.target.value)} />
          </Form.Item>
          <Form.Item label="Citizenship No." name="citizenshipno">
          <Input required type="text" placeholder="Enter Citizenship number" value={name}
          onChange={(e) => setCitizenshipno(e.target.value)} />
          </Form.Item>
          <Form.Item label="date" name="dob">
          <Input required type="date" placeholder="Enter Date of Birth" value={name}
          onChange={(e) => setDate(e.target.value)} />
          </Form.Item>
          <Form.Item label="Please Upload A Photo of Citizenship" name="citizenship">
          <input
        required
          className="form-control"
          type="file"
          name="citizenship"
          onChange={handleImage}
        />

            </Form.Item>
            <button className="btn btn-primary" type="submit">
            Register
          </button>
          <Link to="/login" className="m-2">
            <button className="btn btn-primary">
            Already user login here
            </button>
          </Link>
          
        </Form>
      </div>
    </>
  );
};

export default Register;
