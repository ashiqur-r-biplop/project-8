import React from "react";
import Testimonial from "./Testimonial.jsx";
import OurMoto from "./OurMoto.jsx";
import Banner from "./Banner.jsx";
import Count from "./Count.jsx";

const HomeComponent = () => {
  return (
    <div>
      <Banner></Banner>
      <Count></Count>
      <Testimonial></Testimonial>
      <OurMoto></OurMoto>
    </div>
  );
};

export default HomeComponent;
