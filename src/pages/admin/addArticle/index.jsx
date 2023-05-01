import React, { useState } from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Uploud from '../../../uplouding';

const AddArticle = () => {

  const [idsubject, setIdsubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [author, setAuthor] = useState("");


  const [err, setErr] = useState(null);

  const handleAddArticle = async (e) => {
    setErr("");
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try {
      const res = await axios.post("http://localhost:3600/api/article", { idsubject, title, content, picture, author }, config);
      console.log("in handleAddCourse")
      console.log("after await");
      console.log(res.data);
      if (res.data.message == 'New article created')
        alert("new article created🤗")
      else
        alert("thers a probloems in the details🤔")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>הוספת מאמר</h1>
      <TextField onChange={(e) => { setIdsubject(e.target.value) }} id="outlined-basic" label="idsubject" variant="outlined" /><br></br><br></br>;
      <TextField onChange={(e) => { setTitle(e.target.value) }} id="outlined-basic" label="title" variant="outlined" /><br></br><br></br>;
      <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>;
      <Uploud></Uploud>
      
      {/* <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>; */}
      <Uploud setContent={setContent} content={content}></Uploud>
      <TextField onChange={(e) => { setPicture(e.target.value) }} id="outlined-basic" label="picture" variant="outlined" /><br></br><br></br>;
      <TextField onChange={(e) => { setAuthor(e.target.value) }} id="outlined-basic" label="author" variant="outlined" /><br></br><br></br>;
      <Button onClick={handleAddArticle}>add article</Button>


    </div>
  )
}
export default AddArticle

