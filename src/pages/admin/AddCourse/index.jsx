import React, { useState} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Uploud from '../../../uplouding';



const AddCourse = () => {

   const [lecturer,setLecturer]=useState("");
   const [cost,setCost]=useState("");
   const [picture,setPicture]=useState("");
   const [address,setAddress]=useState("");
   const [minage,setMinage]=useState("");
   const [maxage,setMaxage]=useState("");
   const [numLecture,setNumLecture]=useState("");
   const [maxRegisters,setMaxRegisters]=useState("");
   const [idsubject,setIdsubject]=useState("");
  
   const [topic,setTopic]=useState("");

   const [err, setErr] = useState(null);

  const handleAddCourse=async(e)=>{
 
    setErr("");
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try{
     const res= await axios.post("http://localhost:3600/api/course",{lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage,topic },config);
     console.log("in handleAddCourse")
      console.log("after await");
      console.log(res.data);
      if(res.data.message=='New course created')
         alert("new course created🤗")
      else
         alert("thers a probloems in the details🤔")   
    }catch(err){
      setErr(err.response.data?.message);
    }
  };
  
  return (
  <div style={{paddingTop:"50px"}}>
         <h1>הוספת קורס</h1>
         <TextField onChange={(e)=>{setLecturer(e.target.value)}} id="outlined-basic" label="lecture" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setCost(e.target.value)}} id="outlined-basic" label="cost" variant="outlined" /><br></br><br></br>;
         {/* <TextField onChange={(e)=>{setPicture(e.target.value)}} id="outlined-basic" label="picture" variant="outlined" /><br></br><br></br>; */}
         <Uploud setContent={setPicture} content={picture}></Uploud>
         <TextField onChange={(e)=>{setAddress(e.target.value)}} id="outlined-basic" label="address" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMinage(e.target.value)}} id="outlined-basic" label="minage" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMaxage(e.target.value)}} id="outlined-basic" label="maxage" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setNumLecture(e.target.value)}} id="outlined-basic" label="numLecture" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMaxRegisters(e.target.value)}} id="outlined-basic" label="maxRegisters" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setIdsubject(e.target.value)}} id="outlined-basic" label="idsubject" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setTopic(e.target.value)}} id="outlined-basic" label="topic" variant="outlined" /><br></br><br></br>;
         <Button onClick={handleAddCourse}>add course</Button>
    </div>
  )
}
export default AddCourse
