import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("url");
        if (!response.ok) {
          throw new Error("failed to fetch");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  // const dateInfo = {
  //   date,month,year
  // }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const userInfo = { name, email, phone };
    try {
      const response = await fetch("api-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User Profile Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto w-[80%] grid md:grid-cols-2">
        <div className="md:w-4/5 w-full gird grid-cols-1 items-center">
          <div className="max-w-xs h-100 px-4 py-3 rounded-md shadow-md bg-gray-50 text-gray-800">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
              alt=""
              className="object-cover mx-auto object-center w-24 md:w-32 rounded-full h-24 md:h-32 bg-gray-500 my-6"
            />
            <div className="my-3">
              <div className="grid grid-cols-2 items-center mb-4">
                <p className="text-gray-500">My Profile</p>

                <p className="text-xs text-gray-500">
                  {" "}
                  Date : {`${dateInfo.date}-${dateInfo.month}-${dateInfo.year}`}
                </p>
              </div>
              <div className="grid  grid-cols-2 my-2 mb-4">
                <p className="text-gray-500   text-xs">Name : Abdullah Jabir</p>
                <p className=" text-gray-500  text-xs">Phone : +88015165883</p>
              </div>
              <div className=" grid w-full my-2 mb-4 grid-cols-1 text-xs text-gray-500 ">
                <p>Email : www.demoemail.com</p>
              </div>
            </div>

            <button
              className="flex items-center justify-center w-full p-3 font-semibold  rounded-md bg-orange-600 text-gray-50"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Update Profile
            </button>
          </div>
        </div>

        <div className="shadow-lg rounded-md bg-slate-50">
          <div className=" p-2">
            <p className="text-center rounded-md py-2 bg-white text-orange-600">
              My Billings
            </p>
            <div>{/* maping kore info show korty pari */}</div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full">
          <h3 className=" text-lg text-center">Fill The Form!</h3>
          <div>
            <div className="w-full bg-zinc-50 rounded p-4">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1  mx-auto md:gap-x-12">
                  <div>
                    <div>
                      <p className="text-lg">Name:</p>
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="input input-bordered  w-full mb-2"
                      />
                    </div>
                    <div>
                      <p className="text-lg">Email:</p>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        defaultValue=""
                        className="input input-bordered  w-full mb-2"
                      />
                    </div>

                    <div>
                      <p className="text-lg">Phone:</p>
                      <input
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        className="input input-bordered w-full  mb-2"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-sm bg-orange-600 text-white "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm bg-orange-600 text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default UserProfile;
