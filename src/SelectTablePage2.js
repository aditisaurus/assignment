import React, {useState} from 'react'
import {Badge,Button, Row, Col} from 'react-bootstrap';
import {useNavigate, useLocation } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SelectTablePage2.css';


function SelectTablePage2() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {tables,intendedTables, name} = state; 
    const [value, setValue] = useState();


    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
    <div> <div className="header">
    <Row className="icons">
              <Col>
              <ArrowBackIcon onClick={()=> navigate("/selectTablePage", { state: {tables: tables, name: name}})} fontSize="large"/>
                </Col>
                <Col>
                <HomeIcon onClick={()=> navigate("/homePage")} fontSize="large" /></Col>
                <Col className="end"  >
                <h6>
                <Badge bg="dark"><ChatIcon fontSize="medium"/>CHAT</Badge>
                </h6>
                </Col>
    </Row>
</div>
<div>
            <Row>
              <Col><h1 className="heading1">
                 Select Table
              </h1></Col>
            </Row>
            <Row>
            <Col>
            <h5 className="heading2">{name} has following tables ready for import. Please select the table you would like to import.
             </h5>
            </Col>            
             </Row>
        </div>
<FormControl className="table-list">
<RadioGroup
aria-labelledby="demo-controlled-radio-buttons-group"
name="controlled-radio-buttons-group"
value={value}
onChange={handleChange}
>
{intendedTables?.map((table) => (
<FormControlLabel value={table} control={<Radio />} label={table} />
))}
</RadioGroup>
</FormControl>
<Row>
  <Col></Col>
  <Col sm={3}><Button className="next-button" variant="danger" size="lg" disabled >
   Next
   </Button>{' '}</Col>
   <Col></Col>
</Row>
</div>
  )
}

export default SelectTablePage2