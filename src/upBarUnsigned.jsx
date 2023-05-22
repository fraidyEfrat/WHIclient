import React, { useState } from "react";
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/Person';
// import Login from "./pages/login/index3";
import PopupState from "material-ui-popup-state";
// import ListIcon from '@mui/icons-material/List';
// import HomeIcon from '@mui/icons-material/Home';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import SchoolIcon from '@mui/icons-material/School';
import Login from "./pages/login/index2";
import Register from "./pages/register/index2";


import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{
    const{setRole}=useContext(AuthContext);
    const[login,setLogin]=useState(false);
    const[register,setRegister]=useState(false);

    sessionStorage.removeItem("token", "");
    setRole("UNSIGNED");
    return(<>
     <Button  color="success"  sx={{marginRight:'7px'}} onClick={()=>setRegister(true)} >
            <PersonAddIcon />
            רישום
            </Button>
            <Button  color="success" sx={{marginRight:'7px'}} onClick={()=>setLogin(true)} >
            <PersonAddIcon />
            כניסה
            </Button>
            
    <PopupState variant="popover"  popupId="demo-popup-popover" >
          {(popupState) => (
            <div>
            {login?<Login   setLogin={setLogin}  isOpen={true}></Login>:<></>}  
            </div>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
            {register?<Register setRegister={setRegister} isOpen={true} ></Register>:<></>}  
            </div>
          )}
        </PopupState>

  
    

    </>)

}
export default UpBarUnsigned