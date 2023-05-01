import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from '../home';
import Request from '../user/request';
import Courses from '../courses'
import ArticlesList from '../articleRating';



export default function RoutingUser (){
    return(
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/request" element={<Request/>}></Route> 
<Route path="/articleRating" element={<ArticlesList/>}></Route> 
<Route path="/courses" element={<Courses/>}></Route> 


</Routes>)
}
