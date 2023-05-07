import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputTextarea } from "primereact/inputtextarea";


//
const UserRequest = ({name,age}) => {
  const navigate = useNavigate()
  const [subject,setSubject]=useState("");
  const [request,setRequest]=useState("");
 
  const [err, setErr] = useState(null);
  const response="";


  //const id = JSON.parse(sessionStorage.getItem('user')).userId;
  

   const handleClick=async ()=>{
    //e.preventDefault();
      try {  
          let config = {
              headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
              }
          } 

        debugger;
        await axios.post("http://localhost:3600/api/user_request",  {subject,request}, config);
        alert("בקשתך נשלחה בהצלחה ניידעך במייל כאשר בקשתך תטופל בהקדם בהצלחה יום נעים מתנדבות מרכז מידע לבריאות האישה בני-ברק");
      } catch (err) {
        console.log(err);
        setErr(err.response.data?.message);
      }
      
    };
  
  
return (
  
   <div className="user-request-page" style={{paddingTop:"70px"}}>
      <h1>שליחת שאלה\בקשה</h1>
      <TextField onChange={(e)=>{setSubject(e.target.value)}} type="text" placeholder=" נא לכתוב את נושא השאלה כאן " ></TextField><br/><br/>
      {/* <TextField onChange={(e)=>{setRequest(e.target.value)}} type="text" placeholder=" נא לכתוב את השאלה כאן " ></TextField><br/><br/> */}
      <div className="p-float-label">
                <InputTextarea id="request"  onChange={(e) => setRequest(e.target.value)} rows={10} cols={50} placeholder=" נא לכתוב את השאלה כאן "/>
       </div>
      <Button onClick={handleClick}>שליחת השאלה</Button> <br/><br/>
      </div>
    /*
     
     */
   ////////////////;///
   // <label> בבקשתך נשלחה בהצלחה ניידעך במייל כאשר בקשתך תטופל בהקדם בהצלחה יום נעים מתנדבות מרכז מידע לבריאות האישה בני-ברקק</label>
      
)
}

export default UserRequest


