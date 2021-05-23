import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//pasar contact

const About = (props) => {
    const{ contact }= props
   if(contact){
    return(
        <Col className="About-title">
            <Row>
                <Col lg={'6'} className={'mb-4 About-item'}>
                    <Card bg={'primary'} className={'text-white shadow'}>
                        <Card.Body>
                            <p className="m-0">Name: </p>
                            <p className="text-white-50 small m-0"> {contact[0].name}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={'6'} className="mb-4 About-item">
                    <Card bg={'success'} className={'text-white shadow'}>
                        <Card.Body>
                            <p className="m-0">Phone number: </p>
                            <p className="text-white-50 small m-0">{contact[0].Phone}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={'6'} className="mb-4 About-item">
                    <Card bg={'info'} className={'text-white shadow'}>
                        <Card.Body>
                            <p className="m-0">Email: </p>
                            <p className="text-white-50 small m-0">{contact[0].Email}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={'6'} className="mb-4 About-item">
                    <Card bg={'secondary'} className={'text-white shadow'}>
                        <Card.Body>
                            <p className="m-0">Github: </p>
                            <p className="text-white-50 small m-0">{contact[0].GitHub}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Col>
    ); 
   }else{
       return(<h1>Loading...</h1>)
   }
    
   
}
export default About;