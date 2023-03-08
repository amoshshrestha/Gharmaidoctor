import Navmain from '../components/navbar';
import Medicalrecord from '../components/medrec';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Medicalreport() {
    return(
        <div>
            <Navmain/>
         <div style={{paddingTop:"80px"}}>
      <Link to="/addnewrecords"><Medicalrecord imgsrc="images/add.png" name="Add New Record" /></Link>
      <Link to="/viewrecords"><Medicalrecord imgsrc="images/view.png" name="Medical Timeline"/></Link>
      
      </div>  
      <Footer/>
      
        </div>
    )









}

export default Medicalreport;