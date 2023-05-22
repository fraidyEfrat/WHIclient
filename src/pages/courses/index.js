import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import axios from "axios";
import SinglePlace from './SinglePlace';
import Grid from '@mui/material/Grid';
import Course from './Course';
import ImageButten from './ImageButten';
import sunset from '../images/sunset.jpg';
import {AppBar, Toolbar, Box, Avatar, Card} from '@mui/material';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: _courses } = await axios.get("http://localhost:3600/api/course");
      if (_courses?.length) setCourses(_courses);
      console.log(_courses);
    }
    fetchData();
  }, []);

  return (
    <>
    <AppBar position="relative" style={{minwidth:'100%'}} >
      <Card style={{ width: '100%', height: '30vh' }}    >
      {/* <img src={sunset} alt="Sunset" style={{ width: '100%', height: '20vh' }} /> */}
      <div style={{ position: 'relative' }}>
      <img src={sunset} alt="Sunset" style={{ width: '100%', height: '30vh' }} />
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Arial',
          fontSize: '58px',
          color: 'white',
          padding: '8px',
        }}
      >
        קורסים
      </div>
    </div>
      </Card>
      </AppBar>
      <div style={{ paddingTop: "66px" }}>
        courses---
        <Grid container spacing={3}>
          {courses?.length && courses.map((course) => {
            return <><ImageButten course={course} /> </>
          })}
        </Grid>
      </div>
    </>
  );
}

export default CourseList;
