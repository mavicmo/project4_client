import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-md w-full bg-teal-600 border-b-4">
      <h1 className="text-left p-4 ml-5 font-bold font-under text-4xl">
        <a href="/">SimplyBudget.</a>
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mt-4 mr-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>

      <ul>
        <li>Profile</li>
        <li>Setting</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
