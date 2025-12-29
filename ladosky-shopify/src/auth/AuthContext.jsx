import React, { createContext, useEffect, useState, useContext} from 'react';
import { ROLES } from '../constants/roles';

const AuthContext = createContext(null);

export function AuthProvider({children}){

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("auth_user");
        if(savedUser){
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (email) => {

        const role = 
            email === "oladojabasit29@gmail.com" ? ROLES.ADMIN : ROLES.USER;
        
        const userData = {email, role};

        setUser(userData);
        localStorage.setItem("auth_user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth_user");
    }

    return(

        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}