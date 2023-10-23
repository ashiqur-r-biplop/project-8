import React from "react";
import bus2 from "../../../../src/assets/bus6.jpeg";
import { Link } from "react-router-dom";
import style from "./OurMoto.module.css";

const OurMoto = () => {
  return (
    <div className="max-w-[1200px] mx-5  md:mx-auto overflow-x-hidden border">
      <div className="container w-full grid md:grid-cols-2   grid-cols-1 my-4 md:my-0 ">
        <div className="w-full  flex items-center">
          <div className="md:pl-8 px-2 ">
            <h1 className="text-2xl md:text-4xl brand-color font-bold">
              Bus Tickets
            </h1>
            <h2 className="font-semibold text-lg md:text-2xl mt-2">
              Online Service
            </h2>
            <p className="md:my-5 my-3 text-sm md:text-normal text-gray-600">
              We provide you a easy and husle free ticket booking service . Get
              Your Ticket in your Pocket No more husle in line.now you can go
              home easily
            </p>
            <Link to="/book-ticket">
              <button className="btn brand-btn">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="mb-3  md:mb-0 p-2 w-full -order-1 md:order-1">
          <img src={bus2} className={style.slide} />
        </div>
      </div>
    </div>
  );
};

export default OurMoto;
