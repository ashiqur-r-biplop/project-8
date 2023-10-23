import errorImg1 from "../../../assets/Bus/bus1.png";
import errorImg2 from "../../../assets/Bus/bus2.png";
import errorImg3 from "../../../assets/Bus/bus3.png";
import errorImg4 from "../../../assets/Bus/bus4.png";
import errorImg5 from "../../../assets/Bus/bus5.png";
import errorImg6 from "../../../assets/Bus/bus6.png";
import errorImg7 from "../../../assets/Bus/bus7.png";
import errorImg8 from "../../../assets/Bus/bus8.png";
import errorImg9 from "../../../assets/Bus/bus9.png";
import errorImg10 from "../../../assets/Bus/bus10.png";
import errorImg11 from "../../../assets/Bus/bus11.png";
import errorImg12 from "../../../assets/Bus/bus12.png";
import errorImg13 from "../../../assets/Bus/bus13.png";
import errorImg14 from "../../../assets/Bus/bus14.png";
import errorImg15 from "../../../assets/Bus/bus15.png";
import errorImg16 from "../../../assets/Bus/bus16.png";
import { Link } from "react-router-dom";

const animationFiles = [
  errorImg1,
  errorImg2,
  errorImg3,
  errorImg4,
  errorImg5,
  errorImg6,
  errorImg7,
  errorImg8,
  errorImg9,
  errorImg10,
  errorImg11,
  errorImg12,
  errorImg13,
  errorImg14,
  errorImg15,
  errorImg16,
];

const Error = () => {
  const randomAnimationIndex = Math.floor(
    Math.random() * animationFiles.length
  );
  const randomAnimation = animationFiles[randomAnimationIndex];

  return (
    <div className="container mx-auto px-5 flex md:flex-col flex-col-reverse  justify-center items-center h-screen md:h-[80vh]">
      <div className="mx-auto w-[500px] mt-6">
        <img src={randomAnimation} className="" alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="text-5xl md:text-6xl lg:text-8xl">Sorry</h2>
        <p className="text-3xl lg:text-5xl">We couldn't find that page</p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Please go to{" "}
          <Link className="text-blue-600" href="/">
            Bus Ticket Booking Home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
