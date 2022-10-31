import React from 'react'
import {Badge, Button, Row, Col, Alert} from 'react-bootstrap';
import {useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
  return (
    <div className="homePage">
      
            <Row>
              <Col><h1 className="heading1">
                 What would you like to do today?
              </h1></Col>
            </Row>
            <Row>
            <Col>
            <h5 className="heading2">Welcome to Airboxr. Let's start with the task you want to accomplish today.
             </h5>
            </Col>            
             </Row>
        
     <div className="homePageButtons">
     <Row>
        <Col></Col>
     <Col className="button-1">
     <Button onClick={()=> navigate("/selectSourcePage")} variant="outline-danger">Import Data</Button>{' '}
     </Col>
     <Col></Col>
     </Row>
     <Row>
        <Col></Col>
     <Col className="button-2">
     <Button onClick={()=> navigate("/selectSourcePage")} variant="outline-success">Lookup Data</Button>{' '}
     </Col>
     <Col></Col>
     </Row>
     </div>
    </div>
  )
}

export default HomePage