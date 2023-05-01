import * as React from 'react';

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AppBarUser(){
return(
<nav className='main-nav'>
<NavLink to="/">דף הבית</NavLink>
<NavLink to="/request">איזור אישי</NavLink>
<NavLink to="/articleRating">מאמר</NavLink>
<NavLink to="/courses">קורסים</NavLink>


</nav> 
)
}
export default AppBarUser