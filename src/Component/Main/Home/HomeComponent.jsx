import React from "react";
import Testimonial from "./Testimonial.jsx";
import OurMoto from "./OurMoto.jsx";
import Banner from "./Banner.jsx";

const HomeComponent = () => {
  return (
    <div>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <OurMoto></OurMoto>
    </div>
  );
};

export default HomeComponent;
