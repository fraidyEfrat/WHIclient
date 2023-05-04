import { useContext } from "react";
import { AuthContext } from "../../context/authContex";
//import LogoutIcon from '@mui/icons-material/Logout';

  const Logout = () => {
    const{setRole}=useContext(AuthContext);
    sessionStorage.removeItem("token", "");
    setRole("UNSIGNED");
  };

  export default Logout
