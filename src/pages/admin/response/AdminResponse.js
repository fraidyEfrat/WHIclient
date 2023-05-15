import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/authContex'
import { useContext } from "react";
import { Button } from "@mui/material";
import { InputTextarea } from "primereact/inputtextarea";
import Quill from "../addArticle/react-quill";





//
const AdminResponse = () => {
  
const {idUserRequest} = useParams()
  const navigate = useNavigate()
  const [response,setResponse]=useState("");
  const [result,setResult]=useState({});
  const [err, setErr] = useState(null);
  const location = useLocation();
  const { iduser_request } = location.state;
  const res=[];
console.log("iduser_request:",iduser_request);
useEffect(()=>{
f()
},[])
const token = sessionStorage.getItem("token");
const config = {
  headers: {
    'Authorization': 'Bearer ' + token
  }
}
const  f = async()=>{
  const {data}=await axios.get(`http://localhost:3600/api/user/${iduser_request}`,config);
  console.log(data)
  setResult(data)
}

console.log(idUserRequest)

  const handleClick=async (e)=>{
    
          setErr("");
          e.preventDefault();

          try {
       
        
          console.log("res")
          console.log(res.data.email)
          const email=res.data.email;
          const request=res.data.request;
          const subject=res.data.subject;

          const {data:_response}=await axios.put(`http://localhost:3600/api/user_request/${iduser_request}`,{iduser_request,subject,request,response,email},config);
          if(_response?.length) 
          {
            setResponse(_response)         
            console.log(_response)
            alert("succesfull!")
          }
      }
    
    catch (err) {
      console.log(err);
      setErr(err.response.data?.message);
    }
    
    };
 
return (
  <div className="user-request-page" style={{paddingTop:"70px"}}>
  <h1 style={{fontSize: 35}}>שליחת תגובה</h1>
  {/* <TextField onChange={(e)=>{setRequest(e.target.value)}} type="text" placeholder=" נא לכתוב את השאלה כאן " ></TextField><br/><br/> */}
  <div className="p-float-label">
            <InputTextarea id="request"  onChange={(e) => setResponse(e.target.value)} rows={10} cols={50} placeholder=" נא לכתוב את התגובה כאן "/>
   </div>
   {/* <Quill setContent={setResponse}></Quill> */}
  <Button style={{fontSize: 20}} onClick={handleClick}>שליחת התגובה</Button> <br/><br/>
 
  </div>
  
  )}


export default AdminResponse
