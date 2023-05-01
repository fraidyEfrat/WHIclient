import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import SinglePlace from './SinglePlace';
import Grid from '@mui/material/Grid';
import Course from './Course';
import ImageButten from './ImageButten'




const CourseList = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      async function fetchData() {
          const {data:_courses} = await axios.get("http://localhost:3600/api/course")
          if(_courses?.length) setCourses(_courses)         
          console.log(_courses);
        }
        fetchData()
    }, []);
//cursor pointer

  return (   
    <>
    <div style={{paddingTop:"66px"}}>courses---
        <Grid container spacing={3}>
            {/* {courses?.length && courses.map((course)=>{return <><SinglePlace course={course} />  </>})} */}
            {courses?.length && courses.map((course)=>{return <><ImageButten course={course} />  </>})}
       </Grid>
     </div>
    </>
  )
}



export default CourseList;