import React from "react";
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
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
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
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <Image src="images/logofinale.png" width='350' height='70'/>
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="Citizenship No." name="citizenshipno">
            <Input type="string" required />
          </Form.Item>
          <Form.Item label="date" name="dob">
          <Input
            type="Date"
            required
          />
          </Form.Item>
          <Form.Item label="Please Upload A Photo of Citizenship" name="citizenshipphoto">
          <input
              type="file"
              className="form-control-file"
              
              
              
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
