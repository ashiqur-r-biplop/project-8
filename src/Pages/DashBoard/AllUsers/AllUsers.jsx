import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dhaka-bus-ticket-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);
  console.log(users);
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = users.filter(
      (user) => user.name.toLowerCase().includes(inputValue) || user.number.includes(inputValue)
    );

    setFilteredUsers(filtered);
  };

  return (
    <div className="md:w-[1200px] mx-auto ">
      <button className="  brand-btn p-2 rounded-full transition duration-75">
        Search :{" "}
        <input
          type="text"
          className="p-1 ps-2 rounded-full text-black "
          placeholder="  Search"
          id="search"
          onChange={handleChange}
        />
      </button>
      {/* table */}
      <div className="">
        <table className="table md:w-full my-2 ">
          {/* head */}
          <thead>
            <tr className="text-xl md:text-2xl text-white bg-[#FF4500]">
              <th>Name</th>
              <th>Email & Number</th>
              <th className="">Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="item-center">
            {filteredUsers.map((user, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "text-orange-800 bg-green-100" : "text-black bg-orange-100"
                }
              >
                {/* <th className="hidden md:block">{index + 1}</th> */}
                <td className="md:flex md:items-center md:gap-2">
                  <span className="font-bold md:text-xl">{user.name}</span>
                </td>
                <td className="font-semibold">
                  {user.email}
                  <br />
                  {user.number}
                </td>
                <td className="md:font-semibold  ">{user.role}</td>
                <td className="md:font-semibold font-medium">Delate</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
