import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between px-20 py-6 bg-lightDark text-white">
      <div className="text-2xl font-bold">
        <Link to="/">
          <h1>Firebase Weather</h1>
        </Link>
      </div>

      <div className="flex items-center gap-5">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">SigUp</Link>}
        {user && <Link to="/">Home</Link>}
        {user && <Link to="/users">Users</Link>}
        {user && (
          <button
            className="bg-gray-700 py-2 px-4 text-white font-bold rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
