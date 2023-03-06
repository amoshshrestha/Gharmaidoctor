import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Specialty(props) {
  return (
    <Card style={{ width: '60rem', margin: '32px', borderRadius: '20px' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', padding: '24px', }}>
        <Card.Img variant="top" src={props.imgsrc} style={{ height: '140px', width: '140px', borderRadius: '75px', marginRight: '24px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Card.Title style={{ fontSize: '2rem',fontFamily:'Monaco', fontWeight: 'bold', marginBottom: '1rem' }}>{props.name}</Card.Title>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Card.Text style={{ fontSize: '19px',fontFamily:'sans', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Specialty}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'sans', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Timing}</Card.Text>
            <Card.Text style={{ fontSize: '19px',fontFamily:'sans', fontWeight: 'bold', marginBottom: '0.5rem' }}>{props.Fees}</Card.Text>
            <Button variant="primary" style={{ backgroundColor: 'blueviolet', borderColor: 'black', fontSize: '19px', fontWeight: 'bold', marginTop: '24px',padding:'15px', width: '200px'}}>Book Now</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Specialty;
