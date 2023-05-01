import React, { useState ,useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Admin=()=>{
    const navigate=useNavigate()
  return (   
    <>
    <h1 style={{paddingTop:"66px"}}>Admin</h1>
    <button onClick={()=>navigate("/response")}>לבקשות</button>
    </>
  )
}

//cursor pointer



export default Admin;


