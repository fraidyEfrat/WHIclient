import {useState } from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ArticleRead=({})=>{
  const navigate=useNavigate();
return(
    <>
    <Button onClick={()=>{navigate("/showArticle");}}>
            לקריאה>>>
    </Button>
  </>
)
}
export default ArticleRead