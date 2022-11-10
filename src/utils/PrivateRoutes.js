import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
