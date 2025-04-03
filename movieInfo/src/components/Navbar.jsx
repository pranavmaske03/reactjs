import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 bg-opacity-90 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h2 className="text-2xl font-extrabold tracking-wide text-blue-400 drop-shadow-lg">
          🎬 Movie Info
        </h2>
      </div>
    </nav>
  );
}

export default Navbar;
