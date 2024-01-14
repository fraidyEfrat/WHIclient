import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import axios from "axios";
import SinglePlace from './SinglePlace';
import Grid from '@mui/material/Grid';
import Course from './Course';
import ImageButten from './ImageButten';
import sunset from '../images/sunset.jpg';
import {AppBar, Toolbar, Box, Avatar, Card} from '@mui/material';
import AutocompleteComponent from '../../components/AutocompleteComponentProps ';

const SelectCourses = () => {
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
          {courses?.length && courses.map((course) => {
            return <><ImageButten course={course} /> </>
          })}
      
    </>
  );
}

export default SelectCourses;
