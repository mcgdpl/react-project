import { Navigate, Outlet } from "react-router-dom";

/**
 * Check login
 */
function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem("authToken");
    // console.log(isLoggedIn);
    
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;