import React from "react";
import { Link } from "react-router-dom";

const Parallax = ({title, desc1,desc2}) => {
  return (
    <div
      
      className="flex justify-center items-center md:h-96 h-[70vh] bg-parallax bg-cover bg-fixed"
    >
      <div className=" container p-5 md:px-0 mx-auto  text-center space-y-3 ">
      
        <h1 className="lg:text-5xl text-2xl text-orange-600 font-semibold leading-10">{title}</h1>
        <p className="lg:text-[18px] text-white font-medium overflow-hidden">
         {desc1}
        </p>
        <p className=" lg:text-[18px] text-white font-medium overflow-hidden">
         {desc2}
        </p>
      </div>
    </div>
  );
};

export default Parallax;
