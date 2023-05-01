import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


import axios from "axios";
import { useState } from "react";
import Article from './Article';
import Grid from '@mui/material/Grid';
//import './articles.scss';




const Articles = () => {

  const [err, setErr] = useState(null);
  const [arts, setArts] = useState([]);
  const [res, setRes] = useState([]);

useEffect(()=>{getArticles()},[])

  const getArticles = async () => {
    console.log("in getArticles");
    try {
      const {data:_res}= await axios.get("http://localhost:3600/api/article") 
      if(_res?.length) {
        setRes(_res);        
      }
      //console.log(data);
      
      console.log("_res");
      console.log(_res);
      console.log("res");
      console.log(res);
      //const articles = await res.json();
      //console.log(res.data)
    } catch (err) {
      console.log(err);
      //setErr(err.response.data?.message);
    }
   // setArts(await res.json());
  }
  return (
    <>
    <div>articles---</div>
    {}
          {/* {res?.length && res.map((res)=>{return <Article imgsrc={res.picture} /> })} */}
        <Grid container spacing={0} >
        <Grid item xs={6} md={8}>
        <Grid container spacing={0}>
            {res.map((article)=>
                <Article imgsrc={article.image} /> 
                )}
            </Grid>
        </Grid>
    </Grid>
    </>
  )
};

export default Articles
//