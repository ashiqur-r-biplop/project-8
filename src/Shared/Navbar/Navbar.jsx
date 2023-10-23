import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    <header className="w-full bg-white z-[50] fixed top-0 ">
      <nav
        className={`py-4  lg:px-14 px-4 bg-white ${
          isSticky ? "" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-8">
            <NavLink to="/">
              <h1 className="text-3xl font-bold">
                <span className="text-green-500 uppercase">T</span>icket
                <span className="text-green-500 uppercase italic">Q</span>uest
              </h1>
            </NavLink>
            <ul className="md:flex space-x-12 hidden">
              {navItem.map(({ link, path }) => (
                <Link
                  to={path}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block  transition-all duration-500 hover:bg-[#2E9D49] hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* btn for large device */}
            <div className="space-x-12 hidden lg:flex items-center">
              <Link to="/login" className="">
                Login
              </Link>
            </div>

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
            className={`space-y-4 px-4 mt-16 bg-[#2E9D49] ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItem.map(({ link, path }) => (
              <Link
                to={path}
                smooth={true}
                offset={-100}
                key={path}
                className="block  transition-all duration-500 hover:bg-[#2E9D49] hover:text-white px-3 py-2 rounded-md font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
