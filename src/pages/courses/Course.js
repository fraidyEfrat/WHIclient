import { useParams } from "react-router-dom";
import { useState } from "react";
import defaultImage from '../images/1.jpg';
import { Link } from "react-router-dom"



const Courses = ({imgsrc}) => {
//const {imgsrc}=useParams();

  return (
    <>
    {/* <img src={defaultImage} alt="Medical Article"></img> */}
    <img src={defaultImage} alt="Medical course"></img>
    </>
  )
}

export default Courses;

