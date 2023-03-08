import Corouselspec from "../components/corouselowl";
import Navmain from "../components/navbar";
import Doctorcard from "../components/doccard";
const BookAppointments =()=>{

return(
    <div className="BookAppointment">
<Navmain/>
<h2 style={{paddingTop:"90px",paddingLeft:"30px"}}>Browse by Speciality:</h2>
<Corouselspec/>
<h2 style={{paddingLeft:"30px"}}>Browse by Doctors</h2>
<div className="d-flex justify-content-between">
<Doctorcard imgsrc="images/ANUPSIR.jpg" name="Dr.Anup Shrestha" description="General Physician"/>
<Doctorcard imgsrc="images/bijay.jpg" name="Dr.Bijay Devkota" description="Skin Doctor"/>
<Doctorcard imgsrc="images/sakinwa.jpg" name="Dr.Sakin Maharjan" description="Gynocologist"/>

</div>

    </div>

);

}
export default BookAppointments;