import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = JSON.parse(localStorage.getItem("AuthUser"));

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
