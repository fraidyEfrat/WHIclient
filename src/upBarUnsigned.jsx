import React from "react";
import Button from '@mui/material/Button';


import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/Person';
// import ListIcon from '@mui/icons-material/List';
// import HomeIcon from '@mui/icons-material/Home';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import SchoolIcon from '@mui/icons-material/School';

import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{
    const{setRole}=useContext(AuthContext);
    sessionStorage.removeItem("token", "");
    setRole("UNSIGNED");
    return(<>
    <Button variant="outlined" color="success">
    <LockIcon />כניסה
   {/* <ListIcon/><HomeIcon/><BarChartIcon/><SchoolIcon/> */}
    </Button>
    <Button variant="outlined" color="success" sx={{marginRight:'7px'}}>
    <PersonAddIcon />
        רישום
    </Button></>)
      
}
export default UpBarUnsigned