import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import UserTable from "./components/UserTable.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="/login" element={<Login /> } />
    <Route path="/signup" element={ <Signup /> } />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" index element={<Home />} />
        <Route path="/users" index element={<UserTable />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
