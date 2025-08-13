import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { ProSidebarProvider } from "react-pro-sidebar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProSidebarProvider>
    <ToastContainer />
    <App />
    </ProSidebarProvider>
  </StrictMode>
);
