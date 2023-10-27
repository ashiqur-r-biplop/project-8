import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Myticket = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/my-ticket/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(true);
        setFilteredTickets(data);
      });
  }, [user]);
  //   some change
  if (!loading) {
    return <p className="flex justify-center">Loading...</p>;
  }
  console.log(tickets);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = tickets.filter((user) => {
      const nameIncludes = user.name.toLowerCase().includes(inputValue);
      const phoneIncludes = user.phone && user.phone.includes(inputValue);

      return nameIncludes || phoneIncludes;
    });

    setFilteredTickets(filtered);
  };

  return (
    <div className="w-full  my-5 ">
      <div className="">
        <button className="brand-btn btn-block p-2  transition duration-75">
          Search Here:{" "}
          <input
            type="text"
            className="p-1 ps-2 rounded-full text-black "
            placeholder="Search"
            id="search"
            onChange={handleChange}
          />
        </button>
      </div>
      {/* search options ends here */}
      <table className="table md:w-full  table-sm">
        {/* head */}
        <thead>
          <tr className="text-xl md:text-xl text-white border border-white bg-[#FF4500]">
            <th className=" hidden md:block">Name</th>
            <th className=" ">Email&Number</th>
            <th className=" hidden md:block">BusType</th>
            <th className=" ">Destination</th>
            <th className=" ">Schedule</th>
            <th className=" hidden md:block">Date</th>
            <th className="text-xl md:text-2xl">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((user, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "text-orange-800 bg-slate-300"
                  : "text-black bg-red-300"
              }
            >
              <td className="hidden md:block">{user.name} </td>

              <td className="">
                {user.email}
                <br />
                {user.phone}
              </td>
              <td className="hidden md:block">{user.busType}</td>
              <td className="">{user.to}</td>
              <td className="">{user.schedule}</td>
              <td className="hidden md:block">{user.bookedDate}</td>
              {/* <Link to="/user-feedback"></Link> */}
              <td>
                {user.feedbackSent ? (
                  <>
                    <button
                      disabled
                      className="bg-orange-300 md:px-3 px-2 md:py-2 py-1 rounded"
                    >
                      Feedback
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/user-feedback" state={`${user._id}`}>
                      <button className="brand-btn md:px-3 px-2 md:py-2 py-1 rounded">
                        Feedback
                      </button>
                    </Link>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myticket;
