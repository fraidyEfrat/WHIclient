import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


import React from "react";
import { useContext } from "react";
import { AuthContext } from './context/authContex'
import { useNavigate } from "react-router-dom";

const UpBarUser=()=>{
    const navigate=useNavigate();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const{setRole}=useContext(AuthContext);
    const userName=localStorage.getItem("user name");

    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout=()=>{
        console.log("handleLogout");
        localStorage.removeItem("token", "");
        setRole("UNSIGNED");
    };

    const handlePersonalArea=()=>{
        navigate("/request");
    };

return(
    <>
    <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleMenu}
    color="inherit"
    >
    <AccountCircle />
    </IconButton>
    {userName}
    <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
        vertical: "top",
        horizontal: "left"
    }}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    <MenuItem onClick={handleLogout}>יציאה</MenuItem>
    <MenuItem onClick={handlePersonalArea}>אזור אישי</MenuItem>
    </Menu>
    </>
)}
export default UpBarUser