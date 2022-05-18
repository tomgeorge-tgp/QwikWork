import React, { useState } from "react";
import img from "../assest/tom.jpg";
import { useAuth } from "../firebase/AuthContext";
import { Route, Redirect } from "react-router-dom";
import "../components/Css/WorkerHome.css";
import { Form, Button, Card, Alert, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tool from "../assest/tool.png";

function WorkerHome() {
  const { loggedIn } = useAuth();
  const [editMode, setEditMode] = useState(false);
  if (!loggedIn) return <Redirect to="/workerSignIn" />;
  else {
    return (
      <>
        {console.log("###")}
        <form>
          <div className="container emp-profile">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={img} alt="img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <input
                    className="name"
                    type="text"
                    id="name"
                    name="name"
                    defaultValue="TOM GEORGE"
                    disableUnderline={true}
                    readOnly={editMode}
                  />
                  <input
                    className="work"
                    type="text"
                    id="work"
                    name="work"
                    defaultValue="Developer"
                    disableUnderline={true}
                    readOnly={editMode}
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
                    defaultValue="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies."
                    disableUnderline={true}
                    readOnly={editMode}
                  />

                  <ul className="nav nav-tab" role="tablist">
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <input
                  onClick={() => {
                    setEditMode(!editMode);
                    console.log("HEllo ", editMode);
                  }}
                  type="button"
                  className="profile-edit-btn"
                  defaultValue="Edit Profile"
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
                      tomgeorge4187@gmail.com{" "}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i class="px-2 fas fa-phone-alt"></i> 9999999999
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
                        // defaultValue="********"
                        disableUnderline={true}
                        readOnly={editMode}
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
                        defaultValue="************"
                        disableUnderline={true}
                        readOnly={editMode}
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
                              const skills =
                                e.target.getElementsByTagName("li");
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
}
export default WorkerHome;
