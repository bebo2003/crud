// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./App.css";
import AuthLayout from "./shared/authLayout/AuthLayout";
import NotFound from "./shared/notFound/NotFound";
import ResetPass from "./pages/ResetPass/ResetPass";
import MasterLayout from "./shared/masterLayout/MasterLayout";
import Login from "./pages/Login/Login";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import AddStudentForm from "./pages/AddStudentForm/AddStudentForm";
import { StudentsProvider } from "./context/StudentsContext";
import Home from "./pages/Home/Home";
import { Users } from "./pages/Users/Users";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/reset-password", element: <ResetPass /> },
        { index: true, element: <Navigate to="/login" replace /> }, // optional
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <MasterLayout />
        </PrivateRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { path: "home", element: <Home /> },
        { path: "students", element: <StudentsPage /> },
        { path: "user-form", element: <AddStudentForm /> },
        { path: "users", element: <Users /> },
      ],
    },
  ]);

  return (
    <StudentsProvider>
      <RouterProvider router={routes} />
      {/* ToastContainer عام يظهر في كل الصفحات */}
      <ToastContainer position="top-right" autoClose={2000} />
    </StudentsProvider>
  );
}

export default App;
