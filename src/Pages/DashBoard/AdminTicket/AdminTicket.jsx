import React, { useEffect, useState } from 'react'

const AdminTicket = () => {
     const [allTicket, setAllTicket] = useState([]);
     
     useEffect(()=>{
          fetch('https://dhaka-bus-ticket-server.vercel.app/all-ticket')
          .then(res=>res.json())
          .then(data=>{
               setAllTicket(data)
          })
     },[])





  return (
    
          <div className="md:w-[1200px] md:mx-auto ">
          <div className="">
        <table className="table md:w-full my-2 ">
          {/* head */}
          <thead>
            <tr className="text-xl md:text-2xl text-white bg-[#FF4500]">
            <th className=" hidden md:block">Name</th>
              <th className=" ">Email&Number</th>
              <th className=" hidden md:block">BusType</th>
              <th className=" ">Pick</th>
              <th className=" ">Destination</th>
              <th className=" ">Schedule</th>
              <th className=" hidden md:block">Date</th>
              {/* <th className="text-xl md:text-2xl">Status</th> */}
            </tr>
          </thead>
          <tbody className="item-center">
            {allTicket.map((user, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "text-orange-800 bg-slate-300" : "text-black bg-red-300"
                }
              >
               
                <td className="hidden md:block">{user.name} </td>
                <td className="">{user.email}<br />{user.phone}</td>
                <td className="hidden md:block">{user.busType}</td>
                <td className="">{user.pick}</td>
                <td className="">{user.to}</td>
                <td className="">{user.schedule}</td>
                <td className="hidden md:block">{user.bookedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
   
  )
}

export default AdminTicket