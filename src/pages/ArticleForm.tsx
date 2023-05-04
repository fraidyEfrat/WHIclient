import { TextField,Button } from "@mui/material"
import React from "react"
import Uploud from "../../../uplouding"

const x=()=>{
return(<><TextField onChange={(e) => { setIdsubject(e.target.value) }} id="outlined-basic" label="idsubject" variant="outlined" /><br></br><br></br>;
      <TextField onChange={(e) => { setTitle(e.target.value) }} id="outlined-basic" label="title" variant="outlined" /><br></br><br></br>;
      {/* <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>; */}
      {/* <Uploud></Uploud> */}
      
      {/* <TextField onChange={(e) => { setContent(e.target.value) }} id="outlined-basic" label="content" variant="outlined" ></TextField><br></br><br></br>; */}
      <Uploud setContent={setPicture} content={picture}></Uploud>
      <Button >תוכן המאמר</Button>
      <Quill setContent={setContent}></Quill>
      <br/>
      {/* <TextField onChange={(e) => { setPicture(e.target.value) }} id="outlined-basic" label="picture" variant="outlined" /><br></br><br></br>; */}
      <TextField value={article.content} onChange={(e) => { setAuthor(e.target.value) }} id="outlined-basic" label="author" variant="outlined" /><br></br><br></br>;
      <Button onClick={handleAddArticle}>add article</Button></>)}