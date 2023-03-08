import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Doctorcard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div
        className="card m-2"
        
      >
    <Card style={{ width: '367px',marginLeft:'10px'}}>

      <Card.Body className='d-flex' style={{width:'345px',marginLeft:'25px'}}>
      {/* <Card.Img variant="top" src={doctor.imgsrc} style={{height:'100px',width:'100px',borderRadius:'50px'}} /> */}
      <div>
        <Card.Title>Dr. {doctor.firstName} {doctor.lastName}</Card.Title>
        <Card.Text>
        <p>
            <b>Specialization</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </Card.Text>
        <Button style={{backgroundColor:"blueviolet", height:'50px',width:'160px',cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>BookAppointment</Button>
        </div>

      </Card.Body>

    </Card>
    </div>
  );
}

export default Doctorcard;
