import axios from "axios";
import {useState, useEffect } from "react";
import * as React from 'react';
import SingleComment from './singleComment';

let rows=[];
const ShowComments=({idarticle})=>{
  const [comments,setComments]=useState([]);

    

  useEffect( ()=>{
    console.log("before fetch")
    async function fetchData(){
      const {data : _comments} = await axios.get(`http://localhost:3600/api/response_article/${idarticle}`)
      if(_comments?.length){setComments(_comments)}
      console.log("_comment",_comments);
      console.log("comments",comments);
    }
    fetchData();
    console.log("after fetch")
    console.log("comments  in use effect",comments);
   
    
    
    },[])

    useEffect(() =>{ rows=comments.map((comment) => {console.log("11",comment); return {content:comment.content, name:"aaa"}})
    },[comments])
   

  
  // const rows = [
  //  comments?.length && comments.map((comment) => {createData('name','ttt')})
  // ];

  return(
    
      <SingleComment rows={rows}></SingleComment>
  
)
}
export default ShowComments
//{comments?.length && comments.map((comment) => { return <><SingleComment content={comment.content}/><br/></> })}

