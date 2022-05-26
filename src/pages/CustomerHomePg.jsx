import React, {useEffect, useState} from "react";
import * as _ from "lodash";
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

function SearchBar({value, onClick, onChange}) 
{
  return(
   <div className="mt-3 d-flex w-100 justify-content-center">
      <div className=" input-group w-50 mb-3">
         <input value={value} onChange={onChange} placeholder="Search..." className="form-control" type="text" name="name" />
         <div className="input-group-append">
         <button onClick={onClick} className="btn btn-secondary" type="button" id="button-addon2"><i className="fa fa-search" /></button>
       </div>
      </div>
   </div>
  )
}

function WorkerCards({workers}){
  if (workers.length > 0)
   return workers.map((worker, index) => 
      <Col key={index} xl={4} lg={6} md={6} sm={12}  ><Card {...worker} workerUrl={`/app/customer/WorkerView/${worker.uid}`}/></Col>
    )
  else
    return(
      <h3 className="p-3">Not found!</h3>
    )
}


function HomeC() {
  const [workers, setWorkers] = useState([]);
  const { user } = useAuth();
  const [values,setValues]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = _.debounce((e) => {
    const q = e.target.value;
    setSearchTerm(q);
    if (searchTerm != "")
    {
      const qres = workers.filter( worker => {
        return Object.values(_.omit(worker, "id"))
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      })
      setSearchResults(qres);
    }    
  }, 100);

   useEffect(() => getWorkers(w => setWorkers(w)), []);
  
  return (
  <>    
      <div className="d-flex">
      <Sidebar
        // onClick={console.log(val.title)}
      />
      <div className="w-100">
      {/* <AddressBar onSubmit={async (values, { _setSubmitting }) => {
                   setValues(values);
                  //  console.log(values);

                }}/> */}
      <SearchBar onChange={searchHandler} />
      <div className="img-wrapper">
      <Container >
      <Row style={{"overflow-y": "auto", "max-height": "87vh"}}>
       <WorkerCards workers={searchTerm.length < 1 ? workers : searchResults} />
      </Row>
      </Container>
      </div>
      </div>
      </div>      
  </>);
}

async function getWorkers(callback)
{
    const w = [];
    const {db, query, collection, where, getDocs} = appDB;
    const userCollectionRef = collection(db, "users");
    let q;
    q = query(userCollectionRef, where("category", "==","worker"));
    const docs = await getDocs(q);
    docs.forEach((doc) => w.push({uid: doc.id, ...doc.data()}));
    callback(w);
}

async function getData(param,callback)
{
    console.log(param);
    const w = [];
    const {db, query, collection, where, getDocs} = appDB;
    const userCollectionRef = collection(db, "users");
    let q;
    if(param.locality&&param.district&&param.state){
      console.log(param);
     q = query(userCollectionRef, where("category", "==","worker"),);// where("locality", "==", param.locality), where("district", "==", param.district),where("state", "==", param.state));//where());//;//where("locality", "==", param.locality));
    }
    else 
    {
      q = query(userCollectionRef, where("category", "==","worker"));
    }
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