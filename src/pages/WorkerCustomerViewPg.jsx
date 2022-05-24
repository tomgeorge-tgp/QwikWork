import React, { useEffect, useState } from "react";
import { appDB, storage } from "../firebase";
import { ref, uploadBytes,listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import img from "../assest/tom.jpg";
import { useAuth } from "../firebase/AuthContext";
import { Route, Redirect, useParams } from "react-router-dom";
import "../components/Css/WorkerHome.css";
import { Form, Button, Card, Alert, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tool from "../assest/tool.png";
import { async } from "@firebase/util";

function WorkerCustomerViewPg() {
    console.log("start");
  const { loggedIn, user } = useAuth();
  const { db, doc, getDoc } = appDB;
  
  const allInputs = { imgUrl: "" };
  const dataValues = {
    name: "",
    profession: "",
    category:"worker",
    email:"",
    phoneNumber:"" ,
    description: "",
    locality:"",
    district:"",
    imageUrl:"",
  };
  const {id = ""} = useParams() 
 console.log(id);
  
  const [workerData, setWorkerData] = useState(dataValues)
  
//image upload





 useEffect(async () => {
  try {
    const userRef = doc(db, "users", id);
    const workerDoc = await getDoc(userRef);
    setWorkerData({...dataValues,...workerDoc.data()}); 
     console.log("workerData");
    console.log(workerDoc.data())
  } 
   catch (err) {
      console.log(err);
  } 
 },[])



  
  
  
  if (!loggedIn) return <Redirect to="/workerSignIn" />;
  return (
    <>
      <form>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img " style={{ position: "relative" }}>
               
                <img src={workerData.imageUrl} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <input
                  className="name"
                  type="text"
                  id="fname"
                  name="name"
                  defaultValue={workerData.name}
                
                  disableUnderline={true}
                  readOnly
                />

                <input
                  className="work"
                  type="text"
                  id="work"
                  name="work"
                  defaultValue={workerData.profession}
                 
                  disableUnderline={true}
                  readOnly
                />
                <p className="profile-rating mt-3 mb-5">
                  RANKING:<span>7/10</span>
                </p>
                <textarea
                  className="description"
                  id="description"
                  name="description"
                  rows="4"
                  cols="75"
                  defaultValue={workerData.description}
               
                  disableUnderline={true}
                  readOnly
                />

                <ul className="nav nav-tab" role="tablist">
                  <li className="nav-item"></li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input

                type="button"
                className="profile-edit-btn"
                value= "Register"
              />
            </div>

            <div className="row">
              {/* left  side data */}
              <div className="profile-work col-md-4 ">
                <h6>DETAILS</h6>
                {/* <div className="col-md-4"> */}
                <div>
                  <p className="">
                    <i className="px-2 fa-solid fa-envelope" />{" "}
                    {workerData.email}
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-phone-alt"></i>{" "}
                    {workerData.phoneNumber}
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-home"></i>{" "}
                    <input
                      className="address"
                      type="text"
                      id="address"
                      name="address"
                      defaultValue={workerData.locality}
                      disableUnderline={true}
                      readOnly
                    />
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-map-marker-alt"></i>{" "}
                    <input
                      className="place"
                      type="text"
                      id="place"
                      name="place"
                      defaultValue={workerData.district}
                      disableUnderline={true}
                      readOnly
                    />
                  </p>
                </div>
                {/* </div> */}
              </div>

              {/* right side skills */}
              <div className="col-md-6">
                <div className="tab-content profile-tab" id="myTabContent">
                  <Tabs defaultActiveKey="skills" className="">
                    <Tab eventKey="skills" title="SKILLS">
                      <div className="tab-item-wrapper ">
                        <ul
                          onInput={(e) => {
                            const skills = e.target.getElementsByTagName("li");
                            //   console.log(skills)
                            for (let i = 0; i <= skills.length - 1; i++)
                              console.log(skills[i].innerText);
                          }}
                          className="list-unstyled py-2"
                          contentEditable={true}
                        >
                          <li className="py-1">tool skill</li>
                          <li className="py-1">cut skill</li>
                          <li className="py-1">draw skill</li>
                          <li className="py-1">measure skill</li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="photos" title="PHOTOS">
                      <div className="tab-item-wrapper">
                        <h4>Name : Alex</h4>
                        <h5>Profession : FrontEnd Developer</h5>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Maxime libero vitae quia unde ex ducimus qui
                          reiciendis dolore, cumque possimus.
                        </p>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default WorkerCustomerViewPg;
