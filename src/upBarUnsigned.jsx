import React from "react";
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/Person';
import PopupState from "material-ui-popup-state";
import Login from "./pages/login/index2";
import Register from "./pages/register/index2";


import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{

    const{setRole}=useContext(AuthContext);
    sessionStorage.removeItem("token", "");
    setRole("UNSIGNED");
    return(<>
   
    {/* <Button variant="outlined" color="success" sx={{marginRight:'7px'}} >
    <PersonAddIcon />
        רישום
    </Button> */}
    <Register></Register>
    <Login></Login>
    
    </>)
      
}
export default UpBarUnsigned