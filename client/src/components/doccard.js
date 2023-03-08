import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Doctorcard(props) {

  return (
    <Card style={{ width: '367px',marginLeft:'10px'}}>

      <Card.Body className='d-flex' style={{width:'345px',marginLeft:'25px'}}>
      <Card.Img variant="top" src={props.imgsrc} style={{height:'100px',width:'100px',borderRadius:'50px'}} />
      <div>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button style={{backgroundColor:"blueviolet", height:'50px',width:'160px'}}>BookAppointment</Button>
        </div>

      </Card.Body>

    </Card>
  );
}

export default Doctorcard;
