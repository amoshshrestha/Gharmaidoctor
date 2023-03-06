import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Button from'react-bootstrap/Button';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Navmain() {
  return (
    <Navbar fixed='top' bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand>
          <Image src="images/logofinale.png" width='265' height='53'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end ' >
          <Nav className='justify-end'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#link">Book an Appointment</Nav.Link>
            
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Book an Appointment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              Online Consultation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Medical Records</NavDropdown.Item>
              
              
            </NavDropdown>
            <Button variant="outline-success">Log in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmain;