import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ROLES } from "../constants/roles";

function AdminRoutes({children}){
    const {user} = useAuth();

    if(!user) return <Navigate to="/login"/>;
    if(user.role !== ROLES.ADMIN) return <Navigate to="/"/>

    return children
}

export default AdminRoutes