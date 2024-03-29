 import { AuthContext } from './context/authContex'
import { useContext } from "react";
import {AppBar, Toolbar, Box, Avatar} from '@mui/material';
import Container from '@mui/material/Container';
import { Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register/index3';
import Courses from './pages/courses';
import Request from './pages/user/request';
import Login from './pages/login/index2';
import Logout from './pages/logout';
import Admin from './pages/admin';
import Response from './pages/admin/response';
import AdminResponse from './pages/admin/response/AdminResponse';
import ArticlesList from './pages/articleRating';
import ShowArticle from './pages/articleRating/btnRead/showArticle';
import ShowComments from './pages/articleRating/btnComments/showComments';
//import AddArticle from './pages/articleRating/index'
import AddCourse from './pages/admin/AddCourse';
import Information from './pages/information';
import Statistics from './pages/admin/statistics';
import UpBarUnsigned from './upBarUnsigned';
import UpBarAdmin from './upBarAdmin';
import * as React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonalArea from './pages/user/personalArea';
import RequestList from './pages/user/personalArea/RequestList';
import UpBarUser from './upBarUser'
import defaultImage from './pages/images/logo.jpg';
import Uploud from './uplouding';
import ShowRequest from '../src/pages/user/request/ShowRequest'
import GraphIcon from '@mui/icons-material/SignalCellularAlt';
import ArticleIcon from '@mui/icons-material/Description';
import CourseIcon from '@mui/icons-material/CastForEducation';
import AboutIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import ManegmentIcon from '@mui/icons-material/ManageAccounts';
import Personal from '@mui/icons-material/Face3';
import EmailIcon from '@mui/icons-material/ForwardToInbox';
import AddArticle from './pages/admin/addArticle';
import UpdateArticle from './pages/articleRating/update/Update';
import UpdateCourse from './pages/courses/update/Update';


// {url : "/request", title: "בקשה", element : <Request/>,icon:<HomeIcon/>},
 
// {url:"/requestList",title:"היסטורית בקשות",element:<RequestList/>,icon:<HomeIcon/>},
function Routing() {
      const {role} = useContext(AuthContext);
      
      const paths = {
            "UNSIGNED" : [ {url : "/", title: "דף הבית", element: <Home/>,icon:<HomeIcon/>},
            {url : "/information", title: "אודות", element : <Information/>,icon:<AboutIcon/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>,icon:<ArticleIcon/>},
            {url : "/courses", title: "קורסים", element: <Courses/>,icon:<CourseIcon/>},],
            "USER" : [ {url : "/", title: "דף הבית", element: <Home/>,icon:<HomeIcon/>},
            {url : "/information", title: "אודות", element : <Information/>,icon:<AboutIcon/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>,icon:<ArticleIcon/>},
            {url : "/courses", title: "קורסים", element: <Courses/>,icon:<CourseIcon/>},
            {url:"/personalArea",title:"אזור אישי",element:<PersonalArea/>,icon:<Personal/>},
            // {url : "/logout", title: "logout", element: <Logout/>,icon:<Personal/>}, 
      ],
            "ADMIN" : [ {url : "/", title: "דף הבית", element: <Home/>,icon:<HomeIcon/>},
            {url : "/admin", title: "ניהול", element : <Admin/>,icon:<ManegmentIcon/>},
            {url : "/information", title: "אודות", element : <Information/>,icon:<AboutIcon/>},
            {url : "/statistics", title: "סטטיסטיקות", element: <Statistics/>,icon:<GraphIcon/>},
            {url : "/articleRating", title: "מאמרים", element: <ArticlesList/>,icon:<ArticleIcon/>},
            {url : "/courses", title: "קורסים", element: <Courses/>,icon:<CourseIcon/>},
            {url : "/logout", title: "logout", element: <Logout/>,icon:<Personal/>},
            {url : "/upload", title: "upload", element: <Uploud/>,icon:<HomeIcon/>},
            
              ]            
      } 

      const currPaths = paths[role];
     
      return(
            <>  <AppBar position="fixed" sx={{backgroundColor: '#fff' }} >
            <Container maxWidth="xl">
                  <Toolbar  image={defaultImage}>
                        <img src="/MyLogo.png" style={{height:'50px', borderRadius:'190px 190px 0px 0px'}}/>
                  <Stack direction="row" spacing={5} style={{ marginRight: 'auto', marginLeft: 'auto'}}>
                        {
                              currPaths.map((currPath) => <Button  color="success" component={Link} to={currPath.url}>{currPath.icon}{currPath.title}</Button>) 
                        }
                  </Stack>
                  {role=="USER"?<UpBarUser></UpBarUser>: role=="ADMIN"?<UpBarAdmin></UpBarAdmin>:<UpBarUnsigned></UpBarUnsigned>}
                
                  </Toolbar>
                  {/* <Avatar alt="Remy Sharp" src="/logo.jpg" ></Avatar> */}
                  
            </Container>
            </AppBar>
           <Box sx={{margin:"64px"}}>
                  <Routes>
                        {currPaths.map((currPath => <Route path = {currPath.url} element = {currPath.element}></Route>))},
                        
                        <Route path = {"/article/:idarticle"} element = {<ShowArticle/>}></Route>
                        <Route path = {"/showComments"} element = {<ShowComments/>}></Route>
                        <Route path = {"/response"} element = {<Response/>}></Route>
                        <Route path = {"/addArticle"} element = {<AddArticle/>}></Route>
                        <Route path = {"/updateArticle/:idarticle"} element = {<UpdateArticle/>}></Route>
                        <Route path = {"/updateCourse/:idcourse"} element = {<UpdateCourse/>}></Route>
                        <Route path = {"/addCourse"} element = {<AddCourse/>}></Route>
                        <Route path = {"/adminResponse/:idUserRequest"} element = {<AdminResponse/>}></Route>
                        <Route path = {"/request"} element = {<Request/>}></Route>
                        <Route path = {"/showRequest/:idUserRequest"} element = {<ShowRequest/>}></Route>
                        
                  </Routes>
                
            </Box>
            </>
   

      )
  }
  
export default Routing;
