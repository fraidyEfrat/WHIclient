import React, { useEffect, useState } from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Uploud from '../../../uplouding';
import EditorConvertToHTML from './EditorConvertToHTML';
import Quill from './react-quill';
import { useParams } from 'react-router-dom';


const UpdateArticle = () => {

  const [idsubject, setIdsubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [picture, setPicture] = useState("");
  const [author, setAuthor] = useState("");

  const {idarticle}= useParams();

  const [err, setErr] = useState(null);
  useEffect(()=>{
    async function fetchData(){
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      try{
      const res= await axios.get(`http://localhost:3600/api/article/${idarticle}`,config);
      console.log("res.data",res.data);
      setIdsubject(res.data.idsubject);
      setTitle(res.data.title);
      setContent(res.data.content);
      setPicture(res.data.picture);
      setAuthor(res.data.author);
      }
      catch (err) {
        setErr(err.response.data?.message);
      }
    }
    fetchData();
  },[])
  const handleUpdateArticle = async (e) => {
    setErr("");
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try {
      console.log("content",content);
      const res = await axios.put("http://localhost:3600/api/article", {idarticle, idsubject, title, content, picture, author }, config);
      console.log("update- in handleUpdateCourse")
      console.log("update- after await");
      console.log(res.data);
      if (res.data.message == 'article updated')
        alert("article updated")
      else
        alert("update- thers a probloems in the details🤔")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>עריכת מאמר</h1>
      <TextField  onChange={(e) => { setIdsubject(e.target.value) }} value={idsubject} id="outlined-basic" label="idsubject" variant="outlined" /><br></br><br></br>;
      <TextField onChange={(e) => { setTitle(e.target.value) }} value={title} id="outlined-basic" label="title" variant="outlined" /><br></br><br></br>;
      {/* <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>; */}
      {/* <Uploud></Uploud> */}
      
      {/* <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>; */}
      <Uploud setContent={setPicture} content={picture} value={picture}></Uploud>
      <Button >תוכן המאמר</Button>
      <Quill setContent={setContent} value={content}></Quill>
      <br/>
      {/* <TextField onChange={(e) => { setPicture(e.target.value) }} id="outlined-basic" label="picture" variant="outlined" /><br></br><br></br>; */}
      <TextField onChange={(e) => { setAuthor(e.target.value) }} value={author} id="outlined-basic" label="author" variant="outlined" /><br></br><br></br>;
      <Button onClick={handleUpdateArticle}>שמירת השינוים</Button>
    </div>
  )
}
export default UpdateArticle

