// import { BsApple, BsLinkedin } from "react-icons/bs";
import {
  FaApple,
  FaGooglePlay,
  FaTwitterSquare,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import BusRoute from "../BusRoute/BusRoute";
import AllUsers from "../../Pages/Main/AllUsers/AllUsers";
// import { FaGooglePlay, FaSquareXTwitter } from "react-icons/fa6";
// import { GrFacebook } from "react-icons/gr";

// import logo from "../../assets/img/logo-without-bg.png";

const Footer = () => {
  return (
    <>
      <div className="px-4 bg-gray-900 pt-8">
        <div className="container mx-5 md:mx-auto">
          {/* Footer for Large Screens */}
          <footer className="text-white lg:my-10 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-2 gap-2 ">
              {/* Legal Section */}
              <div className="">
                <div className="py-1 flex items-center justify-start">
                  {/* <img src={logo} className="w-12 h-12" alt="" /> */}
                  <h1 className="text-3xl font-bold">
                    <span className="text-green-500 uppercase">D</span>haka
                    <span className="text-green-500 uppercase"> B</span>us
                    <span className="text-green-500 uppercase"> T</span>icket
                  </h1>
                </div>

                <div className="mt-2">
                  <p className="py-1 text-[12px] text-gray-400">
                    TicketQuest is your one-stop destination for all your bus
                    ticket needs. Whether you are planning a weekend getaway or
                    a cross-country adventure, we have got you covered. Our
                    user-friendly platform allows you to easily search, compare,
                    and book bus tickets to countless destinations.
                  </p>

                  <div className="py-4 flex gap-5">
                    <FaFacebook className="w-7 h-7 cursor-pointer brand-color rounded"></FaFacebook>
                    <FaTwitterSquare className="w-7 h-7 cursor-pointer brand-color rounded"></FaTwitterSquare>
                    <FaLinkedin className="w-7 h-7 cursor-pointer brand-color rounded"></FaLinkedin>
                  </div>
                </div>
              </div>

              {/* About us Section */}
              <div className="md:mx-auto">
                <span className="brand-color text-xl block mb-4">About us</span>
                <div className="mt-2">
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Our Team
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Privacy Policy
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Terms of Use
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Services Section */}
              <div className="md:mx-auto">
                <span className="brand-color text-xl block mb-4">Services</span>
                <div className="mt-2">
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Bus Tickets
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Launch Tickets
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Train Tickets
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    FAQ
                  </a>
                </div>
              </div>
              {/* Quick links Section */}
              <div className="md:mx-auto">
                <span className="brand-color text-xl block mb-4">
                  Quick links
                </span>
                <div className="mt-2">
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Blog
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Bus Companies
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    Travel Tips
                  </a>
                  <a className="link link-hover block text-base py-1 lg:text-lg">
                    My Account
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <p className="text-sm text-center text-white pb-8">
            Copyright © 2023 - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
