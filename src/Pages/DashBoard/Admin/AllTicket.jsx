import React, { useEffect, useState } from 'react'

const AllTicket = () => {
  const [allTicket, setAllTicket] = useState([]);

  useEffect(() => {
    fetch('https://dhaka-bus-ticket-server-two.vercel.app/all-ticket')
      .then(res => res.json())
      .then(data => {
        setAllTicket(data)
      })
  }, [allTicket])

  console.log(allTicket);
  if (!allTicket) {
    return <div className="flex justify-end items-center">
      <p className="text-center">Loading...</p>
    </div>
  }
  return (
    <div className="md:w-[1200px] md:mx-auto bg-orange-50">
      <div className="p-4">
        <h1 className="text-center text-xl font-extrabold p-3">All Tickets Of</h1>
        <div className="flex items-center justify-center">
          <i className="brand-color text-3xl">Dhaka</i>
          <img className="h-6 ms-1 rounded-sm -me-1" src="https://i.ibb.co/qWzZ2NC/bus3.png" alt="" />
          <i className="brand-color  text-3xl">Ticket</i>
        </div>
      </div>
      <div className="flex w-full justify-center">
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

export default AllTicket