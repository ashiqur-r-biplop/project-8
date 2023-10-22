import React from 'react'
import bus1 from '../../../../src/assets/bus1.gif'
import bus2 from "../../../../src/assets/bus6.jpeg";
import { Link } from 'react-router-dom';
import  style from './OurMoto.module.css';

const OurMoto = () => {
  return (
    <div>
      <div className="container w-full grid md:grid-cols-2   grid-cols-1 my-4 md:my-0 ">
        <div className="w-full  flex items-center">
          <div className="md:pl-8 px-2 ">
            <h1 className="uppercase text-2xl md:text-4xl font-semibold text-[#9333ea]">
              Bus Tickets
            </h1>
            <h2 className="uppercase text-[#9333ea] font-semibold text-lg md:text-2xl">
              Online Service
            </h2>
            <p className="md:my-5 my-3 text-sm md:text-normal text-[#9333ea]">
              We provide you a easy and husle free ticket booking service . Get
              Your Ticket in your Pocket No more husle in line.now you can go
              home easily
            </p>
            <Link to="/book-ticker">
              <button className=" text-white px-2 md:px-3 md:py-2 py-1 rounded  bg-[#9333ea]">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-3   md:mb-0 p-2 w-full -order-1 md:order-1">
          <img
            src={bus2}
            className={style.slide}
                  />
        </div>
      </div>
    </div>
  );
}

export default OurMoto