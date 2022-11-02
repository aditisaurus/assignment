import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import { Badge, Row, Col, Spinner } from "react-bootstrap";
import SelectSourcePage from "./SelectSourcePage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import mailchimp from "../logos/mailchimp.png";
import googleAnalytics from "../logos/googleAnalytics.png";
import facebook from "../logos/facebook.png";
import googleAds from "../logos/googleAds.png";

function Main() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState([]);
  const logo = [mailchimp, googleAnalytics, facebook, googleAds];

  const credentials = {
    email: "applicant@airboxr.com",
    password: "ZUSrS5jSZDvEPTyX",
  };

  useEffect(() => {
    setLoading(true);
    let fetchToken = fetch(" https://api.airboxr.com/auth/loginWithEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(credentials),
    });
    let entry = "";
    fetchToken
      .then((res) => res.json())
      .then((d) => {
        entry = d.accessToken;
        fetch("https://api.airboxr.com/data/dataStores", {
          headers: { Authorization: "Bearer " + entry },
        })
          .then((response) => response.json())
          .then(
            (data) =>
              data.forEach(function (element, key) {
                element.image = logo[key];
                setSources(data);
              }),
            setLoading(false)
          );
      });
  }, []);

  return (
    <div>
      <div className="header">
        <Row>
          <Col>
            <ArrowBackIcon
              onClick={() => navigate("/homePage")}
              fontSize="large"
            />
          </Col>
          <Col>
            <HomeIcon onClick={() => navigate("/homePage")} fontSize="large" />
          </Col>
          <Col className="header-end">
            <h6>
              <Badge bg="dark">
                <ChatIcon fontSize="medium" />
                CHAT
              </Badge>
            </h6>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <h1 className="heading-primary">Select Source</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="heading-secondary">
              Below is the list of the sources you have connected. Please choose
              the data source you would like to import data from.
            </h5>
          </Col>
        </Row>
      </div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <div className="main">
          {sources.map((value) => (
            <SelectSourcePage
              id={value.id}
              name={value.name}
              tables={value.tables}
              img={value.image}
              value={value}
              sources={sources}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
