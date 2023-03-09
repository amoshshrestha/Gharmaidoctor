import { Container,Row,Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import "./styleCss/footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
      <footer className="py-5">
      <Container fluid="md">
        <Row>
          <Col md={4} style={{paddingTop:"20px",paddingLeft:'60px'}}>
          <h1><Image src="images/logofinale.png" width='265' height='53'/></h1>
          <div style={{marginLeft:'50px'}}>
          <h5>Talchikhel,Lalitpur</h5>
          <h5>+977 9861785683</h5>
          <h5>gharmaidoctor@gmail.com</h5>
          </div>
          </Col>
          <Col className="justify-content-center" md={4} style={{paddingTop:"20px",paddingLeft:'140px'}}>
          <h1 style={{paddingBottom:'10px'}}>Options</h1>
          <div style={{marginLeft:'23px',fontSize:'18px' }}>
          <h5>Doctors</h5>
          <h5>Patient</h5>
          <Link to="/"><h5>ApplyDoctor</h5></Link>
          </div>
          </Col>
          <Col md={4} style={{paddingTop:"20px",paddingLeft:'140px'}}>
          <h1 style={{paddingBottom:'10px'}}>Services</h1>
          <Link to="/"><h5>Book Appointment</h5></Link>
          <Link to="/"><h5>Online Consultation</h5></Link>
          <Link to="/"><h5>Medical Record</h5></Link>
          <Link to="/"><h5>Register as a doctor</h5></Link>
          </Col>

        </Row>
      </Container>
      </footer>
    );
  }
  
  export default Footer;