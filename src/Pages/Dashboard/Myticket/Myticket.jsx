import { useEffect, useState } from "react";

const Myticket = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch("../../../public/Data/myticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);
  return (
    <div className="md:w-[1200px] md:mx-auto my-10 ">
      <table className="table md:w-full">
        {/* head */}
        <thead>
          <tr className="bg-orange-400 text-white">
            <th className="md:text-2xl text-xl">Date</th>
            <th className="md:text-2xl text-xl">S-Time</th>
            <th className="md:text-2xl text-xl">Destination</th>
            <th className="md:text-2xl text-xl">Set</th>
            <th className="md:text-2xl text-xl">price</th>
            <th className="md:text-2xl text-xl">Delate</th>
          </tr>
        </thead>
        <tbody>
          {tickets?.map((tic,index) => (
            <tr key={tic.customerID}
            className={
               index % 2 === 0 ? "text-orange-800  bg-slate-300" : "bg-red-300 text-black"
             }
            >
              <td>{tic.date}</td>
              <td>{tic.startTime}</td>
              <td> {tic.destination}</td>
              <td>{tic.setNumber}</td>
              <td>${tic.price}</td>
              <td>DLT</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myticket;
