import {useState } from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ArticleRead=({content,idarticle})=>{
  console.log("✔🐱‍🚀✔✔✔ content:");
  console.log(content);
  const navigate=useNavigate();
return(
    <>
    <Button onClick={()=>navigate(`/showArticle`,{ state: {content:{content}}})}>
            לקריאה>>>
    </Button>
  </>
)
}
export default ArticleRead