import React, { useEffect, useState } from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Uploud from '../../../uplouding';
import EditorConvertToHTML from './EditorConvertToHTML';
import Quill from './react-quill';
import { useParams } from 'react-router-dom';


const UpdateCourse = () => {
 
  const [lecturer, setLecturer] = useState("");
  const [maxRegisters, setMaxRegisters] = useState("");
  const [cost, setCost] = useState("");
  const [numLecture, setNumLecture] = useState("");
  const [idsubject, setIdsubject] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");
  const [minage, setMinage] = useState("");
  const [maxage, setMaxage] = useState("");
  const [topic, setTopic] = useState("");

  const {idcourse}= useParams();


  useEffect(()=>{
    async function fetchData(){
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      try{
      const res= await axios.get(`http://localhost:3600/api/course/${idcourse}`,config);
      console.log("res.data",res.data);
      setLecturer(res.data.lecturer);
      setMaxRegisters(res.data.maxRegisters);
      setCost(res.data.cost);
      setNumLecture(res.data.numLecture);
      setIdsubject(res.data.idsubject);
      setPicture(res.data.picture);
      setAddress(res.data.address);
      setMinage(res.data.minage);
      setMaxage(res.data.maxage);
      setTopic(res.data.topic);
      }
      catch (err) {
        //setErr(err.response.data?.message);
      }
    }
    fetchData();
  },[])
  const handleUpdateCourse = async (e) => {
    //setErr("");
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try {

      const res = await axios.put("http://localhost:3600/api/course", {idcourse, lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage,topic }, config);
      console.log("update- in handleUpdateCourse")
      console.log("update- after await");
      console.log(res.data);
      if (res.data.message == 'course updated')
        alert("course updated")
      else
        alert("update- thers a probloems in the details🤔")
    } catch (err) {
      //setErr(err.response.data?.message);
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>עריכת קורס</h1>
      <TextField onChange={(e)=>{setLecturer(e.target.value)}} value={lecturer} id="outlined-basic" label="lecture" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setCost(e.target.value)}} value={cost} id="outlined-basic" label="cost" variant="outlined" /><br></br><br></br>;
         {/* <TextField onChange={(e)=>{setPicture(e.target.value)}} id="outlined-basic" label="picture" variant="outlined" /><br></br><br></br>; */}
         <Uploud setContent={setPicture} content={picture}></Uploud>
         <TextField onChange={(e)=>{setAddress(e.target.value)}} value={address} id="outlined-basic" label="address" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMinage(e.target.value)}} value={minage} id="outlined-basic" label="minage" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMaxage(e.target.value)}} value={maxage} id="outlined-basic" label="maxage" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setNumLecture(e.target.value)}} value={numLecture} id="outlined-basic" label="numLecture" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setMaxRegisters(e.target.value)}} value={maxRegisters} id="outlined-basic" label="maxRegisters" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setIdsubject(e.target.value)}} value={idsubject} id="outlined-basic" label="idsubject" variant="outlined" /><br></br><br></br>;
         <TextField onChange={(e)=>{setTopic(e.target.value)}} value={topic} id="outlined-basic" label="topic" variant="outlined" /><br></br><br></br>;

      <Button onClick={handleUpdateCourse}>שמירת השינוים</Button>
    </div>
  )
}
export default UpdateCourse

