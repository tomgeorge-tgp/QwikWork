import React, { useEffect, useState,useRef } from "react";
import { appDB, storage, } from "../firebase";
import { ref, uploadBytes,listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import img from "../assest/tom.jpg";
import { useAuth } from "../firebase/AuthContext";
import { Route, Redirect } from "react-router-dom";
import "../components/Css/WorkerHome.css";
import { Form, Button, Card, Alert, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tool from "../assest/tool.png";
import { async } from "@firebase/util";

function WorkerHome() {
  const { loggedIn, user } = useAuth();
  const { db, doc, setDoc,updateDoc } = appDB;
  
  const allInputs = { imgUrl: "" };
 
  
 
  //const [userUpdate, setUserUpdate] = useState({ user });
 const [editMode, setEditMode] = useState(false);
//image upload
const dataValues = useRef({
  firstName: user.data.firstName,
  lastName: user.data.lastName,
  profession: user.data.profession || "",
  category:user.data.category,
  email: user.data.email,
  phoneNumber: user.data.phoneNumber,
  description: user.data.description|| "",
  locality: user.data.locality|| "",
  district: user.data.district|| "",
  imageUrl: user.data.imageUrl || "",
  skillList : user.data.skillList || []
});
//const[image,setImage]=useState(null);
const [imageUrl, setImageUrl] = useState(user.data.imageUrl);
const [imageList,setImageList]=useState([]);
const imageListRef =ref(storage,"images/");
const image=useRef(null);
   // Create a reference to the hidden file input element
  // const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  // const handleClick = (event) => {
  //   //hiddenFileInput.current.click();
  // };
  // // Call a function (passed as a prop from the parent component)
  // // to handle the user-selected file
  // const handleChange = (event) => {
  //   const fileUploaded = event.target.files[0];
  //   //props.handleFile(fileUploaded);
  // };

   //dataValues = 

  // const handler = this;
  // console.log('this',handler)
  // useEffect(()=>{
  //   listAll(imageListRef).then((responce)=>{
  //     console.log("responce");
  //     console.log(responce);
  //     responce.items.forEach((item)=>{
  //       getDownloadURL(item).then((url)=>{
  //         setImageList((prev)=> [...prev,url]);
  //       });
  //     });
  //   });
  // },[]);
  console.log("imageListRef");
  console.log(imageListRef);
  if (!loggedIn) return <Redirect to="/workerSignIn" />;
  return (
    <>
      <form>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img " style={{ position: "relative" }}>
                 {console.log("image")}
                 {  console.log(dataValues.current.imageUrl)}
                <img src={imageUrl} alt="img" />
                 {/* {imageList.map((url)=>{
                   if(url==="https://firebasestorage.googleapis.com/v0/b/auth-development-4cccd.appspot.com/o/images%2Fcustomer.png7d3e244e-3c87-4f38-8c96-2e3d60f3149c?alt=media&token=a633f966-81f0-4557-b133-eb7d7835fbec"){
                    console.log(url);
                     return (<img src={url}/ >);
                   
                   }
                 })} */}
                <input
                  type="file"
                  id="actual-btn"
                  accept="img"
                  hidden
                  onChange={(e) => {
                    {
                      console.log(e.target.files[0]);
                      image.current=e.target.files[0];
                      //console.log(dataValues.image);
                      
                      //e.target.files=null;
                    }
                    
                  }}
                />
                <label
                  for="actual-btn"
                  style={{
                    backgroundColor: "transparent",

                    padding: "0.5rem",

                    // fontFamily: "sans-serif",
                    borderRadius: "1.5rem",
                    cursor: "pointer",
                    margin: "0",
                    position: "absolute",
                    top: "137px",
                    right: "160px",
                    color: "#666666",
                    transition: " all .3s cubic-bezier(.175, .885, .32, 1.275)",
                  }}
                >
                  <i class=" fas fa-camera  fa-2x"></i>{" "}
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <input
                  className="name"
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="name"
                  defaultValue={user.data.firstName+" "+user.data.lastName}
                  onChange={(e) => {
                    {
                      dataValues.current = {...dataValues.current, name: e.target.value };
                      
                    }
                    console.log(dataValues.current.name);
                  }}
                  disableUnderline={true}
                  readOnly={!editMode}
                />

                <input
                  className="work"
                  type="text"
                  id="work"
                  name="work"
                  placeholder="profession"
                  defaultValue={user.data.profession}
                  onChange={(e) => {
                    {
                      // setDataValue(prevDatavalues => ({...prevDatavalues, profession : e.target.value }));
                      dataValues.current = {...dataValues.current, profession: e.target.value };
                      
                    }
                    console.log(dataValues.current.profession);
                  }}
                  disableUnderline={true}
                  readOnly={!editMode}
                />
                <p className="profile-rating mt-3 mb-5">
                  RANKING:<span>7/10</span>
                </p>
                <textarea
                  className="description"
                  id="description"
                  name="description"
                  placeholder="description"
                  rows="4"
                  cols="75"
                  defaultValue={user.data.description}
                  onChange={(e) => {
                    {
                      //  setDataValue(prevDatavalues => ({...prevDatavalues, description: e.target.value }));
                      dataValues.current = {...dataValues.current, description: e.target.value };

                    }
                    console.log(dataValues.current.description);
                  }}
                  disableUnderline={true}
                  readOnly={!editMode}
                />

                <ul className="nav nav-tab" role="tablist">
                  <li className="nav-item"></li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                onClick={async () => {
                  setEditMode(prevEditMode=>!prevEditMode);
                  if (editMode) {
                    
                    try {
                      
                       let dataImgUrl=dataValues.current.imageUrl;
                    if (image) {
                       console.log(image);
                      const imageRef = ref(
                        storage,
                        `images/${image.name + v4()}`
                      );
                        console.log("imageRef");
                        console.log(imageRef);
                        const url=await uploadBytes(imageRef,image.current);
                        
                       dataImgUrl=await getDownloadURL(url.ref);
                      //  console.log("dataimageUrl");
                      //  console.log(dataimageUrl);
                      // setDataValue(prevDatavalues => ({...prevDatavalues, imageUrl: dataImgUrl }))
                      dataValues.current = {...dataValues.current, imageUrl: dataImgUrl };

                        // dataValues.imageUrl=dataImgUrl;
                      //  handler.forceUpdate();
                      // setImageUrl(dataImgUrl);
                    
                       
                        console.log("url");
                        console.log(url);
                        
                        console.log("dataValues");
                        console.log(dataValues.current);
                       // setImageList((prev)=>[...prev,url]);
                        
                        //console.log("imageList");

                       // console.log(imageList);
                      
                    }
                      
                    
                    
                   
                      const userRef = doc(db, "users", user.uid);

                      await updateDoc(userRef, dataValues.current);
                      console.log("Registered Successfully!");
                      
                     setImageUrl(dataImgUrl)
                      
                      
                      }
                     catch (err) {
                      console.log(err.message);
                    }
                  }
                }}
                type="button"
                className="profile-edit-btn"
                defaultValue={editMode ? "Save" : "Edit Profile"}
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
                    {user.data.email}
                  </p>
                </div>
                <div>
                  <p>
                    <i class="px-2 fas fa-phone-alt"></i>{" "}
                    {user.data.phoneNumber}
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
                      defaultValue={user.data.locality}
                      placeholder="locality"
                      disableUnderline={true}
                      readOnly={!editMode}
                      onChange={(e) => {
                    
                      //  setDataValue(prevDatavalues => ({...prevDatavalues, address: e.target.value }));
                      dataValues.current = {...dataValues.current, locality: e.target.value };

                      }}
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
                      defaultValue={user.data.district}
                      placeholder="district"
                      disableUnderline={true}
                      readOnly={!editMode}
                      onChange={(e) => {
                    
                      //  setDataValue(prevDatavalues => ({...prevDatavalues, district: e.target.value }));
                      dataValues.current = {...dataValues.current, district: e.target.value };

                    }}
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
                            const skillSet = [];
                            const skills = e.target.getElementsByTagName("li");
                            for (let i = 0; i <= skills.length - 1; i++)
                              {
                                 skillSet.push(skills[i].innerText)
                              }
                              console.log(skillSet)
                              dataValues.current = {...dataValues.current, skillList: [...skillSet] };

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

export default WorkerHome;
