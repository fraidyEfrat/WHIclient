import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from '../login';
import Register from '../register';
import Home from '../home';
import Courses from '../courses'
import ArticlesList from '../articleRating';



export default function RoutingUnsighned(){
    return(<>
<Routes>
<Route path="/" element={<><h1></h1><Home/></>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/articleRating" element={<ArticlesList/>}></Route> 
<Route path="/courses" element={<Courses/>}></Route> 

</Routes></>)
}
