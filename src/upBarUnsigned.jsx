import React from "react";
import Button from '@mui/material/Button';


import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/Person';

import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{
    const{setRole}=useContext(AuthContext);
    localStorage.removeItem("token", "");
    setRole("UNSIGNED");
    return(<>
    <Button variant="outlined" color="success"  icon={<LockIcon />}>
    כניסה
    </Button>
    <Button variant="outlined" color="success" icon={<PersonAddIcon />} sx={{marginRight:'7px'}}>
        רישום
    </Button></>)
      
}
export default UpBarUnsigned