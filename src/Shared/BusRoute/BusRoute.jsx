import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const BusRoute = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  useEffect(() => {
    fetch("../../../public/Data/bus.json")
      .then((res) => res.json())
      .then((data) => setBusRoutes(data));
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto py-4 md:py-8 lg:py-12">
      <h2 className="text-2xl font-bold mb-4 brand-color">
        Available Bus Routes
      </h2>
      <div className="divider"></div>
      <ul className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
        {busRoutes.map((route, index) => (
          <li
            key={index}
            className="text-[12px] flex items-center hover:border-b  transition duration-1000"
          >
            <FaMapMarkerAlt className="mr-2 brand-color"></FaMapMarkerAlt>
            Dhaka to {route.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusRoute;
