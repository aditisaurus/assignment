import React from 'react'
import {Badge, Button, Row, Col, Alert} from 'react-bootstrap';
import {useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
  return (
    <div className="homePage">
     <Row>
     <h3 className="heading-1">
     <Alert key="light" variant="secondary">
     What would you like to do today?
        </Alert>
      </h3>
     </Row>
     <Row>
     <div className="heading-2">
     <Alert key="light" variant="secondary">
     Welcome to AirBoxr. Let's start with the task you want to accomplish today.
        </Alert>
      </div>
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