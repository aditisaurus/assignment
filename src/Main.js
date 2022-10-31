import React,{useState, useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import {useNavigate } from "react-router-dom";
import {Alert,Button, Row, Col, Spinner} from 'react-bootstrap';
import SelectSourcePage from './SelectSourcePage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import mailchimp from './logos/mailchimp.png';
import googleAnalytics from './logos/googleAnalytics.png';
import facebook from './logos/facebook.png';
import googleAds from './logos/googleAds.png';

function Main() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const logo = [
        mailchimp,
        googleAnalytics,
        facebook,
        mailchimp
    ]
    const [sources, setSources] = useState([]);  
  
    var jsonData = {
      "email": "applicant@airboxr.com",
      "password": "ZUSrS5jSZDvEPTyX"
    }
  
    useEffect(() => {
        setLoading(true)
      let fetchRes= fetch(' https://api.airboxr.com/auth/loginWithEmail', {
      method: 'POST', 
      headers: {
          'Content-Type':
              'application/json;charset=utf-8'
      }, 
      body: JSON.stringify(jsonData)
    })
    let entry = "";
    fetchRes.then(res =>
      res.json()).then(d => {
          console.log(d, " Hello")
          
          entry = d.accessToken
          fetch('https://api.airboxr.com/data/dataStores', {
              headers: { 'Authorization': 'Bearer ' + entry }
            })
            .then(response => response.json()
            )
            .then(data => setSources(data),
            setLoading(false)); 
      });
    }, [])
    
  return (
    <div>
        <div className="header">
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
            <Row className="heading">
        <h1 className="heading-1">
        <ArrowBackIcon onClick={()=> navigate("/homePage")} fontSize="large"/>
        Select Source
        </h1>
            </Row>
            <Row>
        <div className="heading-2">
        <h5>Below is the list of the sources you have connected. Please choose the data source you would like to import data from.
        </h5>
         </div>
            </Row>
        </div>
         {
            loading?
           
            <Spinner animation="border" />
          :
            <div className="main">{sources.map((value,key) => (   
                <SelectSourcePage id={value.id} name={value.name} tables={value.tables} img={logo[key]}/>
                ))}</div>

         }
           

          
    
        
        
        
              
    </div>
  )
}

export default Main