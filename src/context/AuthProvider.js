import { useState, useEffect } from "react";
import { AuthContext } from "./authContex";

const AuthProvider = (props) => {

    const [role, setRole] = useState("UNSIGNED");

    useEffect(() => {
        const storedRole = sessionStorage.getItem('role');
        if(storedRole){
            setRole(storedRole);
        }
       
    }, []);

    return (
    <AuthContext.Provider value={{ role, setRole }}>
        {props.children}
    </AuthContext.Provider>);

}
export default AuthProvider;