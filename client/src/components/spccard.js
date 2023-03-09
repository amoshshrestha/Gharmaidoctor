import Card from 'react-bootstrap/Card';



function Corouselcard(props) {
  return (
    <Card style={{ width: '270px',height:'300px',flex:'wrap'}}>
      
      <Card.Body>
      <Card.Img variant="top" src={props.imgsrc} style={{width:'160px',height:'160px' ,marginLeft:'30px'}} />
        <Card.Title className='d-flex' style={{fontSize:'30px',justifyContent:'center'}}>{props.name}</Card.Title>
        <Card.Text  className='d-flex'style={{fontSize:'17px'}} >
        {props.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Corouselcard;