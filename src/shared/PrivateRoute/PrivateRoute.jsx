// src/components/PrivateRoute/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();

  if (!isLoggedIn) {
    // لو مش مسجل دخول يرجع للLogin
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
