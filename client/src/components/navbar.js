import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Button from'react-bootstrap/Button';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { adminMenu, userMenu } from "./../Data/data";
import {useLocation, useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';


import { useSelector } from "react-redux";
import { Badge, message } from "antd";
function Navmain() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Consultations",
      path: "/doctor-consultations",
      icon: "fa-solid fa-list",
    }

    ,
  ];
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <Navbar fixed='top' bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand>
          <Image src="http://localhost:8080/images/logofinale.png" width='265' height='53'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end ' >
          <Nav className='justify-end'>
          {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (

            <LinkContainer to={menu.path}><Nav.Link>{menu.name}</Nav.Link></LinkContainer>
            );
              })}
            
            {/* <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Book an Appointment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              Online Consultation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Medical Records</NavDropdown.Item>
              
              
            </NavDropdown> */}
            
            <Nav.Link className='d-flex' style={{alignItems:"center"}}>
              <img src="http://localhost:8080/images/user.png"  width='30' height='30'/>
              <h style={{fontSize:"16px"}}>{user?.name}</h></Nav.Link>
            
            <LinkContainer to="/login"><Button variant="outline-success" onClick={handleLogout} style={{alignItems:"center"}}>Log out</Button></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmain;