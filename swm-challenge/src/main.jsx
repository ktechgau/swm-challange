import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import "./index.css";

const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
