import React, {useEffect, useState} from "react";
import img from "../assest/tom.jpg";
import { Row,Container,Col } from 'react-bootstrap';
import { appDB } from "../firebase";
import { useAuth } from "../firebase/AuthContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/SideBar";
import AddressBar from "../components/AddressBar";
import "../components/Css/CustomerHome.css";
//import admin from 'firebase-admin';


function HomeC() {
  const [workers, setWorkers] = useState([]);
  const { user } = useAuth();
  const [values,setValues]=useState([]);
   useEffect(() => getData(values, (w) => setWorkers(w)), [])
  return (
  <>    
      {/* <Navbar/> */}
      
      <div className="d-flex">
      <Sidebar/>
      <div>
      <AddressBar onSubmit={async (values, { _setSubmitting }) => {
                   setValues(values);
                   console.log(values);

                }}/>
      
      <div className="img-wrapper">
      <Container>
      <Row>
      {workers.length > 0 && workers.map((worker, index) => {
        console.log(index, worker);
        return(<Col key={index} xl={4} lg={6} md={6} sm={12} ><a href={'#'}><Card {...worker}
               
        /></a></Col>)       
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
    const q = query(userCollectionRef,where("catogory", "==","workers"),where("locality", "==", param.locality),where("district", "==", param.district),where("state", "==", param.state));
    const docs = await getDocs(q);
    docs.forEach(doc => w.push(doc.data()));
      console.log("tom");
      console.log(w);
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