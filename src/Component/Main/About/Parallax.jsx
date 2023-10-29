import React from "react";
import { Link } from "react-router-dom";

const Parallax = ({ title, desc1, desc2 }) => {
  return (
    <section className="relative">
      <div className="flex justify-center items-center md:h-[50vh] h-[70vh]  bg-parallax bg-cover bg-fixed">
        <div className=" max-w-[1200px]  p-5 bg-[#00000096] md:px-0 mx-auto  text-center space-y-3 ">
          <h1 className="lg:text-5xl text-2xl text-orange-600 font-semibold leading-10">
            {title}
          </h1>
          <p className="lg:text-[18px] text-white font-medium overflow-hidden">
            {desc1}
          </p>
          <p className=" lg:text-[18px] text-white font-medium overflow-hidden">
            {desc2}
          </p>
        </div>
      </div>
     
    </section>
  );
};

export default Parallax;
