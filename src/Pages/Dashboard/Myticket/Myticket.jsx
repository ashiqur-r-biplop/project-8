import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Myticket = () => {
  const [tickets, setTickets] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://dhaka-bus-ticket-server-two.vercel.app/my-ticket/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(true);
      });
  }, [user]);
  //   some change
  if (!loading) {
    return <p className="flex justify-center">Loading...</p>
  }
  console.log(tickets);
  return (
    <div className="container md:mx-auto my-10 ">
      <table className="table md:w-full table-sm">
        {/* head */}
        <thead>
          <tr className="text-xl md:text-2xl text-white bg-[#FF4500]">
            <th className=" hidden md:block">Name</th>
            <th className=" ">Email&Number</th>
            <th className=" hidden md:block">BusType</th>
            <th className=" ">Pick</th>
            <th className=" ">To</th>
            <th className=" ">Schedule</th>
            <th className=" hidden md:block">Date</th>
            <th className="">Fed-Back</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((user, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0 ? "text-orange-800 bg-slate-300" : "text-black bg-red-300"
              }
            >

              <td className="hidden md:block">{user.name} </td>
              <td className="">{user.email}<br />{user.phone}</td>
              <td className="hidden md:block">{user.busType}</td>
              <td>
                {user?.bookedSeat?.map((element) => (
                  <span >{element} </span>
                ))}
              </td>
              <td className="">{user.pick}</td>
              <td className="">{user.to}</td>
              <td className="">{user.schedule}</td>
              <td className="hidden md:block">{user.bookedDate}</td>
              <td className="">
                <button className="brand-btn">Feedback</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myticket;
