import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { adminMenu, userMenu } from "./../Data/data";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useSelector } from "react-redux";
import { Badge, message } from "antd";
function Navmain() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
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
          <Image src="http://localhost:8080/images/logofinale.png" width='265' height='53' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end ' >
          <Nav className='justify-end'>
            {SidebarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (

                <LinkContainer to={menu.path}><Nav.Link>{menu.name}</Nav.Link></LinkContainer>
              );
            })}






          </Nav>
          <div ref={ref}>
  <Nav.Link>
    <img src='http://localhost:8080/images/user.png' onClick={handleClick} width='30' height='30' />
  </Nav.Link>

  <Overlay
    show={show}
    target={target}
    placement="bottom"
    container={ref}
    containerPadding={20}
  >
    <Popover id="popover" style={{ width: "300px", height: "300px" }}>
      <Popover.Body>
        <Container fluid className="text-center">
          <div style={{ margin: "10px" }}>
            <img src="http://localhost:8080/images/user.png" width="80" height="80" />
          </div>
          <div style={{ margin: "10px"}}>
            <h2 style={{ fontFamily: 'Castoro Titling', fontSize: "24px", margin: "0" }}>{user?.name}</h2>
            
          </div>

         
          
          <div style={{ margin: "10px" }}>
            <h4 style={{ fontFamily: 'Source Sans Pro', fontSize: "18px", margin: "0" }}>{user?.email}</h4>
          </div>
          <div style={{ cursor: "pointer",margin: "10px" }}>
                <Badge
                  count={user && user.notifcation.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  Notifications
                  <i className="fa-solid fa-bell" style={{width:"20px",height:"20px"}}></i>
                </Badge>
                </div>
          <div style={{ margin: "10px" }}>
            <LinkContainer to="/appointments">
              <NavLink>My Appointments</NavLink>
            </LinkContainer>
          </div>
          <div style={{ margin: "10px" }}>
            <LinkContainer to="/login">
              <Button variant="outline-success" onClick={handleLogout} style={{ alignItems: "center" }}>
                Log out
              </Button>
            </LinkContainer>
          </div>
        </Container>
      </Popover.Body>
    </Popover>
  </Overlay>
</div>



        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navmain;