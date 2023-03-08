import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "react-bootstrap/esm/Image";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div>
    
    <div className="form-container ">
    
      
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <Image src="images/logofinale.png" width='350' height='70'/>
        <h3 className="text-center">Log In</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <button className="btn btn-primary" type="submit">
          Sign In
        </button>
        <Link to="/register" className="m-2">
          <button className="btn btn-primary">
         Sign up
         </button>
        </Link>
        
      </Form>
    </div>
    </div>
  );
};

export default Login;
