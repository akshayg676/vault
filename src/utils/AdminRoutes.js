import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = JSON.parse(localStorage.getItem("AuthAdmin"));

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
