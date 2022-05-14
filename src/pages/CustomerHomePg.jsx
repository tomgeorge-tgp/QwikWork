import React from "react";
import img from "../assest/tom.jpg";
import { Row,Container,Col } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/SideBar";
import "../components/Css/CustomerHome.css";
function HomeC() {
  return (<div>
      
      <Navbar/>
      <div className="d-flex">
      <Sidebar/>
      <div className="img-wrapper">
      <Container>
      <Row>
      
        <Col xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card/></a></Col>
        <Col xl={4} lg={6}  md={6} sm={12} ><a href={'#'}><Card/></a></Col>
        <Col xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card/></a></Col>
      
        <Col xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card/></a></Col>
        <Col xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card/></a></Col>
        <Col xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card/></a></Col>
       
      </Row>
      </Container>
      </div>
     
      
      </div>
      
      
  </div>);
}

export default HomeC