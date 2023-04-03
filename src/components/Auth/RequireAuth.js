import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

function RequireUser({ children }) {
  const { user, loading } = useUser();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  if (loading) {
    return;
  }

  if (!user.uid || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireUser;
