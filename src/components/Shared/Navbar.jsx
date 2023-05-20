import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AiFillCar } from "react-icons/ai";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, updateUrl } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("doctors");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-base-200 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center text-3xl">
          {/* <span className="ml-2   font-bold tracking-wide text-gray-800">CC
          <span className="text-blue-300">Hospital</span>
          </span> */}
          <span>
            <AiFillCar className="text-blue-500" />
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addToy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Add a toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        {user ? (
          <>
            {" "}
            <Link to={"/appoint"}>
              <p className="font-bold text-green-500">
                <small>My Toys</small>
              </p>
            </Link>
            <button onClick={handleLogOut} className="p-2 rounded btn btn-sm">
              {" "}
              SignOut{" "}
            </button>
            <div className="relative inline-block group">
              <img
                src="https://lh3.googleusercontent.com/a/AGNmyxYoZpZr3z629at42vhbr5aWTk9mhTWhyajofPABXQ=s96-c"
                alt="User Picture"
                className="w-12 h-12 rounded-full"
              />
              <div className="opacity-0 bg-white p-2 rounded-md shadow-md absolute bottom-0 left-0 group-hover:opacity-100">
                <span className="text-gray-800">Mr..</span>
              </div>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="p-2 rounded btn btn-sm"> SignIn </button>
          </Link>
        )}

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span>
                        <AiFillCar className="text-blue-500" />
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/chart"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        All toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/applied"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        My Toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        add a toy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
