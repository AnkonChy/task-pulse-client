import React, { Children } from "react";
import Loading from "../../components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location.pathname}></Navigate>;
  }
  return <div>{Children}</div>;
};

export default PrivateRoute;
