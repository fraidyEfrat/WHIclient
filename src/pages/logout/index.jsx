import { useContext } from "react";
import { AuthContext } from "../../context/authContex";
import {useNavigate} from 'react-router-dom';
//import LogoutIcon from '@mui/icons-material/Logout';

  const Logout = () => { 
    const navigate = useNavigate();
    const{setRole}=useContext(AuthContext);
    sessionStorage.removeItem("token", "");
    setRole("UNSIGNED");
    navigate("/");
  };

  export default Logout
