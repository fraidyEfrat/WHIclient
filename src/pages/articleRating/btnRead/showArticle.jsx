
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import React, {useState, useEffect} from "react"
import {Box} from "@mui/material"
 
const ShowArticle= () => {
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState([]);
    
    const location = useLocation();
        const {idarticle}=useParams();

              // const searchParams = new URLSearchParams(location.search);
              // const idarticle = searchParams.get('idarticle');
              // console.log("idarticle",idarticle);
    useEffect( () => { 
        async function fetchData() {
            try {
              const res=await axios.get(`http://localhost:3600/api/article/${idarticle}`);
              console.log("res",res);
              console.log(res.data.content);
              setContent(res.data.content);
              setTitle(res.data.title)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
   
    const renderHTML = (htmlString) => { return {__html: htmlString}}
  
    return(
      <div style={{paddingTop:"166px", margin:'auto'}}>
     <>
     <h1 >{title}</h1>
     <Box sx={{display:"flex", alignItems:"center", backgroundColor:"green", justifyContent:"center", fontSize:"166px"}}> <div dangerouslySetInnerHTML={renderHTML(content)} /> </Box>
     
  </>
  </div>
)
};



export default ShowArticle