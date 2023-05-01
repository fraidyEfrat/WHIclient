import React from "react";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{
    const{setRole}=useContext(AuthContext);
    localStorage.removeItem("token", "");
    setRole("UNSIGNED");
    return(<>
    <Button variant="outlined" color="success">
    כניסה
    </Button>
    <Button variant="outlined" color="success" sx={{marginRight:'7px'}}>
        רישום
    </Button></>)
}
export default UpBarUnsigned