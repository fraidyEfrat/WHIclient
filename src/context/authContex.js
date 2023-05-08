
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({
    role: "UNSIGNED",//ENUM,
    setRole: (newRole) => {},
    

    
});


