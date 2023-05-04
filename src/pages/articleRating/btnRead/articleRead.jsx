import {useState } from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const ArticleRead=({idarticle})=>{
  const navigate=useNavigate();
return(
    <>
    <Button onClick={()=>navigate(`/showArticle?idarticle=${idarticle}`)}>
            לקריאה>>>
    </Button>
  </>
)
}
export default ArticleRead

//,{ state: {content:{content}}}