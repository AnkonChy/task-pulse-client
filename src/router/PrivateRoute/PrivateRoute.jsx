
import Loading from "../../components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
