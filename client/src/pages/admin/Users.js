import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import Navmain from "../../components/navbar";
import { message, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  
  

  //getUsers
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
        
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  const handleAccountStatus = async (record, status) => {
    
    const userId= record._id
    
    try {

      const res = await axios.put(
        "/updateuserstatus",
        { userId: userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
        
        
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);



  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        
        <div className="d-flex">
          
          {record.status === "pending" ? (
            
            <button
              className="btn btn-success"
              onClick={() => {handleAccountStatus(record, "approved")}}
            >
              Approve
            </button>
          ) : (
            <button className="btn btn-danger">Reject</button>
          )}
        </div>
      ),
    },
    {
      title: "citizenship",
      dataIndex: "citizenship",
      render: (text, record) => (
        
        <div className="d-flex">
          
          <a href={`http://localhost:8080/${record.citizenship}`}><button className="btn btn-danger" >citizenship</button></a>
          
        </div>
      ),
    },
  ];

  return (
    <div>
      <Navmain />
      <h1 className="text-center m-2">Users List</h1>
      <Table columns={columns} dataSource={users} />
      
    </div>
  );
};

export default Users;
