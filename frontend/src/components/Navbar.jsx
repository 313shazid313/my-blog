import { NavLink } from "react-router-dom";
import Searching from "./Searching";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState();
  const toggleMobileMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  const [isDark, setIsDark] = useState(false);
  const toggleForDark = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="container max-w-screen-xl mx-auto">
      <div className="flex justify-end border-b-2 p-3 ">
        <ul>
          <li className="inline-block pr-5 pl-5 border-r-2 cursor-pointer ">
            About Me
          </li>
          <li className="inline-block pr-5 pl-5 border-r-2 cursor-pointer">
            Github
          </li>
          <li className="inline-block pr-5 pl-5 border-r-2 cursor-pointer">
            Reddit
          </li>
          <li className="inline-block pr-5 pl-5 cursor-pointer">Contact</li>
        </ul>
      </div>
      {/* only for desktop */}
      <div className="md:flex hidden pl-7 pr-7 mx-auto ">
        <ul className="flex  h-14">
          <li className="pr-8 pl-5 text-2xl cursor-pointer h-full flex items-center">
            <NavLink to="/">myBlog</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-[#00B5AD] border-t-4 border-transparent  cursor-pointer h-full flex items-center">
            <NavLink to="/">Linux</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-[#00B5AD] border-t-4 border-transparent  cursor-pointer h-full flex items-center">
            <NavLink to="/">Bugs</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-[#00B5AD] border-t-4 border-transparent cursor-pointer h-full flex items-center">
            <NavLink to="/">DSA</NavLink>
          </li>
          <li className="pr-5 pl-5 hover:border-t-[#00B5AD] border-t-4 border-transparent  cursor-pointer h-full flex items-center">
            <NavLink to="/"></NavLink>
          </li>
        </ul>

        {/* searching component */}
        <div className="flex items-center ml-auto">
          <div className="pr-4 pl-4">
            <Searching />
          </div>
          {/* theme change */}
          <div
            className={`w-14 h-7 p-1 flex items-center bg-gray-400 
                      rounded-full cursor-pointer transition-colors duration-300 ${
                        isDark ? "justify-end" : "justify-start"
                      }`}
          >
            <button
              onClick={toggleForDark}
              className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
            >
              {isDark ? (
                <FaMoon className="text-gray-500" />
              ) : (
                <FaSun className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="md:hidden block">
          <button onClick={toggleMobileMenu}>
            {openedMenu ? <IoClose /> : <IoMenuSharp />}
          </button>
        </div>
      </div>
      {/* only for mobile */}
      <div className="hidden">
        <h1>mobile</h1>
      </div>
    </nav>
  );
};

export default Navbar;
