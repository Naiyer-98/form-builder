import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="text-2xl font-bold text-blue-500 text-center">
        <Link to="/">Home</Link>
        <Link to="/register" className="m-10">
          Register
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Navbar;
