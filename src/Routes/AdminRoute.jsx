import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuthContext from "../Hooks/useAuthContext";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuthContext();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRoute;