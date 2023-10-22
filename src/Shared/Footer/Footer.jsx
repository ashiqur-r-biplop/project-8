// import { BsApple, BsLinkedin } from "react-icons/bs";
import {
  FaApple,
  FaGooglePlay,
  FaTwitterSquare,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import BusRoute from "../BusRoute/BusRoute";
// import { FaGooglePlay, FaSquareXTwitter } from "react-icons/fa6";
// import { GrFacebook } from "react-icons/gr";

// import logo from "../../assets/img/logo-without-bg.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto bg-gray-900 text-white">
        {/* Footer for Large Screens */}
        <footer className="lg:my-10 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-2 gap-2 ">
            {/* Legal Section */}
            <div className="">
              <div className="py-1 flex items-center justify-start">
                <img src="image/url" className="w-12 h-12" alt="" />
                <h1 className="text-3xl font-bold">
                  <span className="text-green-500 uppercase">T</span>icket
                  <span className="text-green-500 uppercase italic">Q</span>uest
                </h1>
              </div>

              <div className="mt-2">
                <p className="py-1 text-lg text-gray-400">
                  TicketQuest is your one-stop destination for all your bus
                  ticket needs. Whether you are planning a weekend getaway or a
                  cross-country adventure, we have got you covered. Our
                  user-friendly platform allows you to easily search, compare,
                  and book bus tickets to countless destinations.
                </p>

                <div className="py-4 flex gap-5">
                  <FaFacebook className="w-7 h-7 cursor-pointer brand-color  rounded"></FaFacebook>
                  <FaTwitterSquare className="w-7 h-7 cursor-pointer brand-color  rounded"></FaTwitterSquare>
                  <FaLinkedin className="w-7 h-7 cursor-pointer brand-color  rounded"></FaLinkedin>
                </div>
              </div>
            </div>

            {/* About us Section */}
            <div className="md:mx-auto">
              <span className="text-xl brand-color block mb-4">About us</span>
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
              <span className="text-xl block mb-4 brand-color">Services</span>
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
      </div>
      {/* Copyright Section */}
      <footer className="border-t border-gray-500 text-neutral-content py-4 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2023 - All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
