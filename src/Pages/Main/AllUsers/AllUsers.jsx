import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("../../../../public/Data/allusers.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div className="md:w-[1200px] mx-auto ">
      {/* table */}
      <div className="">
        <table className="table md:w-full  ">
          {/* head */}
          <thead>
            <tr className="text-xl md:text-2xl brand-color">
              <th>Name</th>
              <th>Email & Number</th>
              <th className="">Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="item-center">
            {users.map((user, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "text-orange-600" : "text-gray-500"
                }
              >
                {/* <th className="hidden md:block">{index + 1}</th> */}
                <td className="md:flex md:items-center md:gap-2">
                  <img
                    src={user.photo}
                    className="mask mask-squircle w-12 h-12"
                    alt="user"
                  />
                  <span className="font-bold md:text-xl">{user.name}</span>
                </td>
                <td className="font-semibold">
                  {user.email}
                  <br />
                  {user.number}
                </td>
                <td className="md:font-semibold  ">User</td>
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
