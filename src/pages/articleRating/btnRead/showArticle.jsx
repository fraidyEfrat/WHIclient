import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";


const ShowArticle=() => {
  const navigate = useNavigate()
  const location = useLocation();
   const {content} = location.state.content;
console.log(content);
    return(
     <>
  <br></br><br></br> <br></br><br></br>


  <iframe src={`http://localhost:3600/images/${content}`} width="100%" height="100%" >

      {/* <p>
          Your browser does not support PDF files.
          <a href="mypdf.pdf">Download the file instead</a>
      </p> */}
  </iframe>
  </>
)
}
export default ShowArticle