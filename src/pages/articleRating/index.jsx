import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import ArticleItem from './articleItem';
import Article from './Article';
import SingleArticle from './SingleArticle';
import Grid from '@mui/material/Grid';


//import { Table,TableBody } from '@mui/material';


const ArticlesList = () => {
  const [articels, setArticels] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const { data: _articels } = await axios.get("http://localhost:3600/api/article")
      if (_articels?.length) setArticels(_articels)
      console.log(_articels);
      console.log(articels);
    }
    fetchData()
  }, []);
  //cursor pointer

  return (
    <>
      <div style={{paddingTop:"166px"}}>articels---
      <Grid container spacing={5}>
        {articels?.length && articels.map((article) => { return <><SingleArticle article={article} />  </> })}
      </Grid>
      </div>
    </>
  )
}

export default ArticlesList;
//
//const [changeStars, setChangeStars] = useState(false);
{/* <Grid container spacing={3} >
<Grid item xs={6} md={8}>
<Grid container spacing={0}>
    {articels?.length && articels.map((article)=>{return <><SingleArticle article={article} />  </>})}
</Grid>
</Grid>
</Grid> */}