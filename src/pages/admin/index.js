import React, { useState ,useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";

const Admin=()=>{
    const navigate=useNavigate()
  return (   
    <>
    <h1 style={{paddingTop:"66px"}}>Admin</h1>
    <Button onClick={()=>navigate("/response")}>הפניות הלא מטופלות</Button>
    <Button onClick={()=>navigate("/response")}>הפניות שבטיפול</Button>
    <Button onClick={()=>navigate("/response")}>הפניות שטופלו לשנות 10 10</Button><br/><br/><br/><br/>
    <Button onClick={()=>navigate("/AddArticle")}>הוספת מאמרים</Button>
    <Button onClick={()=>navigate("/addCourse")}>הוספת קורסים</Button>
    <Button onClick={()=>navigate("/articleRating")}>עריכת מאמרים</Button>
    <Button onClick={()=>navigate("/courses")}>עריכת קורסים</Button>
    </>
  )
}

//cursor pointer



export default Admin;


