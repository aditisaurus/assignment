import React, {useState} from 'react'
import {Alert,Button, Row, Col} from 'react-bootstrap';
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
        <HomeIcon onClick={()=> navigate("/homePage")} fontSize="large" />
        </Col>
        <Col></Col>
        <Col className="end"  >
       <ChatIcon fontSize="large" />
        </Col>
    </Row>
</div>
 <div>
    <Row>
<h3 className="heading-1">
<ArrowBackIcon onClick={()=> navigate("/selectTablePage",{ state: { tables: tables, name: name,  }})} fontSize="large"/><Alert key="light" variant="secondary">Select Table</Alert>
</h3>
</Row>
<Row>
<div className="heading-2">
<Alert key="light" variant="secondary"> {name} has the following tables ready for import. Please select the table you would like to import.</Alert>
</div>
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
  <Col><Button className="next-button" variant="danger" size="lg" disabled >
   Next
   </Button>{' '}</Col>
  <Col></Col>
</Row>
</div>
  )
}

export default SelectTablePage2