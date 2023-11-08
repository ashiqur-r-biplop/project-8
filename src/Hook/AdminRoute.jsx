import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "./useUserRole";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { role: isAdmin, loading: isAdminLoading } = useUserRole();
  const location = useLocation();


  if (loading || isAdminLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user && isAdmin == "admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
