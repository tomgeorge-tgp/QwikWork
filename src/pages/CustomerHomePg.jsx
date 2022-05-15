import React, {useEffect, useState} from "react";
import img from "../assest/tom.jpg";
import { Row,Container,Col } from 'react-bootstrap';
import { appDB } from "../firebase";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/SideBar";
import "../components/Css/CustomerHome.css";
function HomeC() {
  const [workers, setWorkers] = useState([]);
  useEffect(async () => {
    const w = [];
    const {db, query, collection, where, getDocs} = appDB;
    const userCollectionRef = collection(db, "users");
    const q = query(userCollectionRef, where("category", "==", "worker"));
    const docs = await getDocs(q);
    docs.forEach(doc => w.push(doc.data()));
    // console.log(workers);
    setWorkers(w);
  }, [])
  return (
  <>    
      <Navbar/>
      <div className="d-flex">
      <Sidebar/>
      <div className="img-wrapper">
      <Container>
      <Row>
      {workers.length > 0 && workers.map((worker, index) => {
        console.log(index, worker);
        return(<Col key={index} xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card {...worker}/></a></Col>)       
      }
      )}
       
      </Row>
      </Container>
      </div>
     
      
      </div>
      
      
  </>);
}

export default HomeC