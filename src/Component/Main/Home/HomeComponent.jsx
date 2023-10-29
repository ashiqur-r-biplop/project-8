import React from "react";
import Testimonial from "./Testimonial.jsx";
import OurMoto from "./OurMoto.jsx";
import Banner from "./Banner.jsx";
import Count from "./Count.jsx";
import HomeMarquee from "./HomeMarquee.jsx";
import TicketBookingSteps from "./TicketBookingSteps.jsx";
import Services from "./Services.jsx";
import NewsLetter from "./NewsLetter.jsx";
const HomeComponent = () => {
  return (
    <div className="mt-[20px]">
      <Banner></Banner>
      <HomeMarquee></HomeMarquee>
      <Count></Count>
      <OurMoto></OurMoto>
      <Testimonial></Testimonial>
      <TicketBookingSteps></TicketBookingSteps>
      <Services></Services>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomeComponent;
