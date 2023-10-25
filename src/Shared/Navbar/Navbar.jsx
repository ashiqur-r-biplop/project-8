import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const loadUser = useContext(AuthContext);
  const { user } = loadUser;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home", path: "/" },
    { link: "BookTicket", path: "book-ticket" },
    { link: "Book Bus", path: "book-bus" },
    { link: "About Us", path: "about" },
    { link: "Contact Us", path: "contact" },
  ];

  return (
    <header className="w-full bg-white z-[50] fixed top-0">
      <nav className={`py-4  lg:px-14 px-4 bg-white ${isSticky ? "shadow" : ""}`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-8">
            <NavLink to="/">
            <div className="flex items-center">
        <i className="brand-color text-3xl">Dhaka</i>
        <img className="h-6 ms-1 -me-1" src="https://i.ibb.co/Q8q2wGg/bus2.png" alt="" />
        <i className="brand-color  text-3xl">Ticket</i>
      </div>
            </NavLink>
            <ul className="md:flex space-x-12 hidden">
              {navItem.map(({ link, path }) => (
                <NavLink
                  to={path}
                  smooth={true}
                  offset={-100}
                  key={path}

                  className={({ isActive }) => {
                    return (
                      "px-2 py-2 rounded-md" +
                      (isActive
                        ? "transition-all rounded-md bg-gray-300 text-black duration-500  hover:text-black"
                        : "bg-gray-300 text-black hover:bg-[#2E9D49] rounded-md")
                    );
                  }}
                >
                  {link}
                </NavLink>
              ))}
            </ul>

            {/* btn for large device */}
            {
              user ? <Link className="">
                Logout
              </Link> : <div className="space-x-12 hidden lg:flex items-center">
                <Link to="/login" className="">
                  Login
                </Link>
              </div>
            }

            {/* menu btn for only mobile device */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
          </div>

          {/* items for mobile device*/}
          <div
            className={`space-y-4 px-4 mt-16 bg-[#2E9D49] ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
          >
            {navItem.map(({ link, path }) => (
              <NavLink
                to={path}
                smooth={true}
                offset={-100}
                key={path}
                // className="block  transition-all duration-500 hover:bg-[#2E9D49] hover:text-white px-3 py-2 rounded-md font-medium"
                className={({ isActive }) => {
                  return (
                    "grid p-2 my-3 rounded-md " +
                    (!isActive
                      ? "transition-all rounded-md text-black duration-500 hover:bg-black hover:text-white"
                      : "bg-gray-300 text-black")
                  );
                }}
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
