import { Container,Row,Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import "./styleCss/footer.css";
function Footer() {
    return (
        <footer className="py-5">
      <Container fluid="md">
        <Row>
          <Col md={4} style={{paddingTop:"20px"}}>
          <h1><Image src="images/logofinale.png" width='265' height='53'/></h1>
          <p>Talchikhel,Lalitpur</p>
          <p>+977 9861785683</p>
          <p>gharmaidoctor@gmail.com</p>
          </Col>
          <Col className="justify-content-center" md={4} style={{paddingTop:"40px"}}>
          <h4>Options</h4>
          <a className="nav-link" href="#">Doctors</a>
          <a className="nav-link" href="#">Register as Doctors</a>
          <a className="nav-link" href="#">Payment Options:</a>
          <Row>
            <Col>
                <div className="d-flex justify-content-center" md="8">
                    <Image src="images/pay1.png" width='80' height='40' />
                    <Image src="images/pay2.png" width='80' height='40' />
                    <Image src="images/pay3.png" width='80' height='40' />
                    
                </div>
            </Col>
            </Row>
            <Row>
                <Col>
                <div className="d-flex justify-content-center" >
                <Image src="images/pay4.png" width='80' height='40' />
                <Image src="images/pay5.png" width='80' height='40' />
                <Image src="images/pay6.png" width='80' height='40' />
                </div>
                </Col>
                </Row>
          </Col>
          <Col md={4} style={{paddingTop:"20px"}}>
          <h1><Image src="images/logofinale.png" width='265' height='53'/></h1>
          <a className="nav-link" href="#">Talchikhel,Lalitpur</a>
          <a className="nav-link" href="#">+977 9861785683</a>
          <a className="nav-link" href="#">gharmaidoctor@gmail.com</a>
          </Col>
          
        </Row>
      </Container>
      </footer>
    );
  }
  
  export default Footer;