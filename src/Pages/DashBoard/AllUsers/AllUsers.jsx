import React, { useEffect, useState } from "react";
import './AllUsers.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dhaka-bus-ticket-server-two.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      });
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = users.filter((user) => {
      const nameIncludes = user.name.toLowerCase().includes(inputValue);
      const phoneIncludes = user.phone && user.phone.includes(inputValue);

      return nameIncludes || phoneIncludes;
    });

    setFilteredUsers(filtered);
  };

  return (
    <div className="bg-orange-50 md:p-12">
      <div className="p-4">
        <h1 className="text-center text-xl font-extrabold p-3">All Users Of</h1>
        <div className="flex items-center justify-center">
          <i className="brand-color text-3xl">Dhaka</i>
          <img className="h-6 ms-1 rounded-sm -me-1" src="https://i.ibb.co/qWzZ2NC/bus3.png" alt="" />
          <i className="brand-color  text-3xl">Ticket</i>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div>
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
          {/* table */}
          <div className="">
            <table className="table md:w-full my-2">
              {/* head */}
              <thead>
                <tr className="text-xl md:text-2xl text-white bg-[#FF4500]">
                  <th>Name</th>
                  <th>Email & Phone</th>
                  <th className="">Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="item-center">
                {filteredUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "text-green-700 bg-green-100 border-b-2 border-green-300" : "text-orange-700 bg-yellow-100 border-b-2 border-yellow-500"
                    }
                  >
                    <td className="md:flex md:items-center md:gap-2">
                      <span className="font-bold md:text-sm">{user.name}</span>
                    </td>
                    <td className="font-semibold">
                      {user.email}
                      <br />
                      {user.phone}
                    </td>
                    <td className="md:font-semibold">{user.role}</td>
                    <td className="md:font-semibold font-medium">Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
