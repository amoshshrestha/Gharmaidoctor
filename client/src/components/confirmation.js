import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Confirm(props) {
  const fee = parseInt(props.Fees);
   const tax = 0.13 * fee;
   const Total = tax + fee;
  return (
    <div className='d-flex' style={{justifyContent:'center'}}>
    <Card style={{ width: '60rem'}}>
      <Card.Body className='d-flex'>
        <div style={{display:'flex', flexDirection:'column' ,alignItems:'flex-start'}}>
          <div className='d-flex'>
      <Card.Img variant="top" src={props.imgsrc} style={{ height: '140px', width: '140px', borderRadius: '75px', marginRight: '24px' }} />
        <div style={{ display: 'flex', flexDirection: 'column',alignItems:'flex-start' }}>
          <Card.Title style={{ fontSize: '2rem',fontFamily:'Monaco', fontWeight: 'bold', marginBottom: '0.75rem' }}>{props.name}</Card.Title>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Specialty}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Timing}</Card.Text>
        </div>
        </div>
        <div className='d-flex' style={{flexDirection:'column', alignItems:'flex-start', marginTop:'3 0px'}}>
        <Card.Title style={{ fontSize: '29px',fontFamily:'Monaco', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Details</Card.Title>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Date:{props.date}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Appointment Time:{props.time}</Card.Text>
            </div>
            </div>
            
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end',marginLeft:'20rem',marginTop:'10rem'}}>

            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Doctor Fee:Rs.{fee}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Tax:Rs.{tax}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'Arial', fontWeight: 'bold', marginBottom: '0.5rem' }}>Total Fee:Rs.{Total}</Card.Text>
            <Button variant="primary" style={{ fontSize: '19px', fontWeight: 'bold',padding:'15px', width: '250px'}}>Confirm Appointment</Button>
            </div>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default Confirm;

