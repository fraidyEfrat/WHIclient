import { useParams } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom"



const Article = ({imgsrc}) => {
//const {imgsrc}=useParams();

  return (
    <>
    {/* <img src={defaultImage} alt="Medical Article"></img> */}
    <img src={imgsrc} alt="Medical Article"></img>
    </>
  )
}

export default Article;

