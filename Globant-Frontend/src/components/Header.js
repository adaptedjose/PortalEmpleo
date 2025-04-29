// components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-tight">
          <NavLink
            to="/"
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text hover:from-blue-500 hover:to-indigo-600 transition-all duration-300"
          >
            Jobok
          </NavLink>
        </h1>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6 sm:space-x-10 items-center text-white text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700 hover:text-blue-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700 hover:text-blue-300"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700 hover:text-blue-300"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-700 hover:text-blue-300"
                  }`
                }
              >
                Look for Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `py-2 px-5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 ${
                    isActive ? "ring-2 ring-blue-300" : ""
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;