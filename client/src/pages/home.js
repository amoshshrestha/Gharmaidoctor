import Navmain from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecard from '../components/homecard';
import Footer from '../components/footer';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/style.css"
const Homepg=()=>{
    return(
    <div className="App">
      <Navmain/>
      <div className='d-flex ' style={{paddingTop:'80px'}} >
      <div style={{width:"100%", padding:'10px'}}>
        <video width="100%" autoPlay muted>
          <source src="/images/Appointment.mp4" type="video/mp4" />
        </video>
      </div>
      </div>

       <div className='d-flex ' style={{paddingTop:'10px'}}>
      <Link to="/bookappointment">
        <Homecard className="link-card" imgsrc="images/med_appointment.png" name="Book an appointment" description="Appointment with best doctors"/>
        </Link>
      <Link to="/onlineconsultation">
        <Homecard imgsrc="images/onlineconsultation.png" name="Online consulation" description="Consult with best doctors"/>
        </Link>
      <Link to="/medicalreport">
        <Homecard imgsrc="images/med_records.png" name="Medical Records" description="Check and Add new Records"/>
        </Link>
      </div>

      <div><Footer/></div>
      </div>
    )
}
export default Homepg;