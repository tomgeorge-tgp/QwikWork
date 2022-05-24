import React, {useEffect, useState} from "react";
import img from "../assest/tom.jpg";
import { Row,Container,Col } from 'react-bootstrap';
import {
  Route,
  Link,
  
} from "react-router-dom";

import { appDB } from "../firebase";
import { useAuth } from "../firebase/AuthContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/SideBar";
import AddressBar from "../components/AddressBar";
import "../components/Css/CustomerHome.css";
//import name from "./name";
import WorkerCustomerViewPg from "./WorkerCustomerViewPg";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
//import WorkerHome from "./WorkerHome";
//import admin from 'firebase-admin';


function HomeC() {
  const [workers, setWorkers] = useState([]);
  const { user } = useAuth();
  const [values,setValues]=useState([]);
   useEffect(() => getData(values, (w) => setWorkers(w)), []);
  //  console.log("workers");
  //  console.log(workers);
  return (
  <>    
     
      
      <div className="d-flex">
      <Sidebar/>
      <div>
      <AddressBar onSubmit={async (values, { _setSubmitting }) => {
                   setValues(values);
                  //  console.log(values);

                }}/>
      
      <div className="img-wrapper">
      <Container>
      <Row>
      {workers.length > 0 && workers.map((worker, index) => {
        //console.log(index, worker);
        return(<Col key={index} xl={4} lg={6} md={6} sm={12}  ><Link to={`/app/customer/WorkerView/${worker.uid}`}><Card {...worker}/></Link></Col>)       
      }
      )}
       
      </Row>
      </Container>
      </div>
      </div>
      </div>
      
     
      
      
  </>);
}
async function getData(param,callback)
{
    console.log(param);
    const w = [];
    const {db, query, collection, where, getDocs} = appDB;
    const userCollectionRef = collection(db, "users");
    const q = query(userCollectionRef, where("category", "==","worker"));//where("catogory", "==","worker"));//where("locality", "==", param.locality),where("district", "==", param.district),where("state", "==", param.state));
    const docs = await getDocs(q);
    // console.log("docs");
    // console.log(docs);
    docs.forEach((doc) => w.push({uid: doc.id, ...doc.data()}));
    

     // console.log("tom");
      // console.log(w);
     callback(w);
 
}

// async function searchWorker(query)
// {
//   console.log(query);
//   const {fullTextSearch} = appDB;
//   const results = await fullTextSearch("en", query);
//   console.log(results);
// }
export default HomeC