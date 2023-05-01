import { AuthContext } from './context/authContex'
import { useContext } from "react";
import {AppBar, Toolbar, Box} from '@mui/material';
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Courses from './pages/courses';
import Request from './pages/user/request';
import Login from './pages/login';
import Logout from './pages/logout';
import Admin from './pages/admin';
import Response from './pages/admin/response';
import AddResponse from './pages/admin/response/addResponse';
import ArticlesList from './pages/articleRating';
import ShowArticle from './pages/articleRating/btnRead/showArticle';
import ShowComments from './pages/articleRating/btnComments/showComments';
import Add from './pages/admin/add';
import Information from './pages/information';
import Statistics from './pages/admin/statistics';
import UpBarUnsigned from './upBarUnsigned';
import UpBarAdmin from './upBarAdmin';
import * as React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import RequestList from './pages/user/personal/RequestList';
import PersonalArea from './pages/user/personalArea';
import RequestList from './pages/user/personalArea/RequestList';
import UpBarUser from './upBarUser'
import defaultImage from './pages/images/logo.jpg';
import Uploud from './uplouding';


function Routing() {
      const {role} = useContext(AuthContext);
      
      const paths = {
            "UNSIGNED" : [ {url : "/", title: "דף הבית", element: <Home/>},
            {url : "/information", title: "מידע", element : <Information/>},
            {url : "/register", title: "הרשמה", element : <Register/>},
            {url : "/login", title: "כניסה", element: <Login/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>},
            {url : "/courses", title: "קורסים", element: <Courses/>},],
            "USER" : [ {url : "/", title: "דף הבית", element: <Home/>},
            {url : "/information", title: "מידע", element : <Information/>},
            {url : "/request", title: "בקשה", element : <Request/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>},
            {url : "/courses", title: "קורסים", element: <Courses/>}, 
            {url:"/requestList",title:"היסטורית בקשות",element:<RequestList/>},
            {url:"/personalArea",title:"אזור אישי",element:<PersonalArea/>} ],
            "ADMIN" : [ {url : "/", title: "דף הבית", element: <Home/>},
            {url : "/admin", title: "ניהול", element : <Admin/>},
            {url : "/information", title: "מידע", element : <Information/>},
            {url : "/add", title: "הוספת קורסים ומאמרים", element: <Add/>},
            {url : "/statistics", title: "סטטיסטיקות", element: <Statistics/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>},
            {url : "/courses", title: "קורסים", element: <Courses/>},
            {url : "/logout", title: "logout", element: <Logout/>},
            {url : "/upload", title: "upload", element: <Uploud/>},
            
              ]            
      } 

      const currPaths = paths[role];
     
      return(
            <>
           
                  <Routes>
                        {currPaths.map((currPath => <Route path = {currPath.url} element = {currPath.element}></Route>))},
                        {/* {url : "/showArticle", title: "showArticle", element: <ShowArticle/>},
                        {url : "/showComments", title: "showComments", element: <ShowComments/>} */}
                        <Route path = {"/showArticle"} element = {<ShowArticle/>}></Route>
                        <Route path = {"/showComments"} element = {<ShowComments/>}></Route>
                        <Route path = {"/response"} element = {<Response/>}></Route>
                        <Route path = {"/addResponse"} element = {<AddResponse/>}></Route>
                     
                  </Routes>
                  <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="fixed" sx={{backgroundColor: '#a3fdd8' }} >
                  <Container maxWidth="xl">
                        <Toolbar  image={defaultImage}>
                        <Stack direction="row" spacing={5} style={{ marginRight: 'auto', marginLeft: 'auto'}}>
                              {
                                    currPaths.map((currPath) => <Button  color="success" component={Link} to={currPath.url}>{currPath.title}</Button>) 
                              }
                        </Stack>
                        {role=="USER"?<UpBarUser></UpBarUser>: role=="ADMIN"?<UpBarAdmin></UpBarAdmin>:<UpBarUnsigned></UpBarUnsigned>}
                      
                        </Toolbar>
                  </Container>
                  </AppBar>
                  </Box>
            </>
   

      )
  }
  
export default Routing;
