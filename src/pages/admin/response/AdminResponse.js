import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/authContex'
import { useContext } from "react";




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
  
   <div className="user-request-page"  style={{ paddingTop: "50px" }}>

    <h1>אזור אישי</h1>
      
      <input onChange={(e)=>{setResponse(e.target.value)}} type="text" placeholder=" נא לכתוב את התגובה כאן  " ></input><br/><br/>
      
      <button onClick={handleClick}>שליחת התגובה</button> <br/><br/>
     gggggggggg
      
      </div>
   
  
  )}


export default AdminResponse
