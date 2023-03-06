import Card from 'react-bootstrap/Card';

function Corouselcard(props) {
  return (
    <Card style={{ width: '250px',height:'320px',flex:'wrap'}}>
      
      <Card.Body>
      <Card.Img variant="top" src={props.imgsrc} style={{width:160,height:160}} />
        <Card.Title style={{fontSize:'30px'}}>{props.name}</Card.Title>
        <Card.Text >
        {props.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Corouselcard;