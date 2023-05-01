
import * as React from 'react';

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AppBarAdmin(){
return(
<nav className='main-nav'>
<NavLink to="/">דף הבית</NavLink>
<NavLink to="/admin">ניהול</NavLink>
<NavLink to="/articleRating">מאמר</NavLink>
<NavLink to="/courses">קורסים</NavLink>
</nav>
)
}
export default AppBarAdmin