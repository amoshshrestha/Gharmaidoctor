import React from 'react';
import Card from 'react-bootstrap/Card'

function Medicalrecord(props) {
  return (
    <div className="card-hover d-flex justify-content-center">
      <Card  style={{ width: '350px', height: '100px',marginTop:'10px'}}>
        <Card.Body className='d-flex justify-content-center'>
          <Card.Img variant="top" src={props.imgsrc} style={{ height: '50px', width: '50px' }} />
          <div>
            <Card.Title style={{fontSize:'25px', marginTop: '17px', marginLeft: '10px', }}>{props.name}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Medicalrecord;