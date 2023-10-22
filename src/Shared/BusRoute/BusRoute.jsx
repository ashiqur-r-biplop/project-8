import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
 

const BusRoute = () => {
     const [busRoutes,setBusRoutes] = useState([]);
     useEffect(()=>{
          fetch('../../../public/Data/bus.json')
          .then(res=>res.json())
          .then(data=>setBusRoutes(data))
     },[])
  return (
     <div className="p-4 md:p-8 lg:p-12">
     <h2 className="text-2xl font-bold mb-4 text-green-500">Available Bus Routes</h2>
     <div className="divider"></div> 
     <ul className=" grid grid-cols-2 md:grid-cols-5 h-[330px]">
       {busRoutes.map((route, index) => (
         <li
           key={index}
           className="text-[12px] ps-2 flex items-center hover:border-b hover:border-green-400 transition duration-1000"
         >
           <FaMapMarkerAlt className="mr-2 text-green-500"></FaMapMarkerAlt>
          Dhaka to {route.name}
         </li>
       ))}
     </ul>
   </div>
  )
}

export default BusRoute