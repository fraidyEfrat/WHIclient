import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Response from '../admin/response';
import AddResponse from '../admin/response/addResponse';
import Courses from '../courses'
import Admin from '../admin'
import ArticlesList from '../articleRating';
import Home from "../home";



export default function RoutingAdmin (){
    return(
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/admin" element={<Admin/>}></Route> 
<Route path="/articleRating" element={<ArticlesList/>}></Route> 
<Route path="/response" element={<Response/>}></Route> 
<Route path="/addResponse" element={<AddResponse/>}></Route> 
<Route path="/courses" element={<Courses/>}></Route> 


</Routes>)
}
