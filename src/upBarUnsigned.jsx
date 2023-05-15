import React from "react";
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/Person';
import PopupState from "material-ui-popup-state";
import Login from "./pages/login/index2";
import Register from "./pages/register/index2";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../src/context/authContex";
const UpBarUnsigned=()=>{

    const{setRole}=useContext(AuthContext);
    sessionStorage.removeItem("token", "");
    const navigate = useNavigate()

    setRole("UNSIGNED");
    return(<>
   
    {/* <Button variant="outlined" color="success" sx={{marginRight:'7px'}} >
    <PersonAddIcon />
        רישום
    </Button> */}
    
    {/* <Button variant="outlined" color="success" sx={{marginRight:'7px'}} onClick={()=>navigate(`/register` ,{ state: { open: {open}} })} >
            <PersonAddIcon />
            רישום
            </Button> */}
            
            <Button variant="outlined" color="success" sx={{marginRight:'7px'}} onClick={()=>navigate(`/register`)} >
            <PersonAddIcon />
            רישום
            </Button>
            <Button variant="outlined" color="success" sx={{marginRight:'7px'}} onClick={()=>navigate(`/login`)} >
            <PersonAddIcon />
            כניסה
            </Button>
    {/* <Register></Register> */}
    {/* <Login></Login> */}
    
    </>)
      
}
export default UpBarUnsigned