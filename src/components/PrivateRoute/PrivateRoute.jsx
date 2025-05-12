import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ isAuth, navigateTo }) => {
  return isAuth ? <Outlet /> : <Navigate to={navigateTo} />;
};
