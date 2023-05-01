import * as React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RoutingUser from './Routes';

function AppBarUnsighned(){
    const navigate = useNavigate();
    
return(
   
    <>

<nav className='main-nav'>

<NavLink to="/">דף הבית</NavLink>
<NavLink to="/register">הרשמה</NavLink>
<NavLink to="/login">כניסה</NavLink>
<NavLink to="/articleRating">מאמר</NavLink>
<NavLink to="/courses">קורסים</NavLink>
</nav>

</>
)
}
export default AppBarUnsighned