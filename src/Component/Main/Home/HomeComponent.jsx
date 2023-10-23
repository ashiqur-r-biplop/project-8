import React from "react";
import Testimonial from "./Testimonial.jsx";
import OurMoto from "./OurMoto.jsx";
import Banner from "./Banner.jsx";
import Count from "./Count.jsx";

const HomeComponent = () => {
  return (
    <div className="mt-[20px]">
      <Banner></Banner>
      <Count></Count>
      <OurMoto></OurMoto>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomeComponent;
