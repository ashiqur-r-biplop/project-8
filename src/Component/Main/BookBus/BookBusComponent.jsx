import React, { useContext } from "react";
import BusRoute from "../../../Shared/BusRoute/BusRoute";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const BookBusComponent = () => {

  const loadUser = useContext(AuthContext);
  const user = loadUser.user;
  const { displayName, email } = user;

  console.log(loadUser);
  const handleData = (e) => {
    e.preventDefault();
    const form = e.target;
    const journeyDate = form.journeyDate.value;
    const returnDate = form.returnDate.value;
    const busType = form.busType.value;
    const originCity = form.originCity.value;
    const destinationCity = form.destinationCity.value;
    const seats = form.seats.value;
    const buses = form.buses.value;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const companyName = form.companyName.value;
    const address = form.address.value;
    const optionalPhone = form.optional_phone.value;

    const data = {
      journeyDate,
      email,
      returnDate,
      busType,
      originCity,
      destinationCity,
      seats,
      optionalPhone,
      buses,
      name,
      phone,
      companyName,
      address,
      payment: "success",
    };

    // ********Book Bus Post Method****************
    fetch('http://localhost:5000/book-bus', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Booked Bus Successfully!",
            text: "",
            icon: "success",
            confirmButtonText: "Thank You",
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  if (!user) {
    return <p>Loading</p>
  }

  return (
    <div className="mt-24 container mx-auto">
      <div className="md:mx-20 p-10 mb-6 bg-orange-50 shadow-xl text-black rounded-lg">
        {/* <p className="text-sm">NB:All(*)marks are required field.</p> */}
        <h1 className="text-4xl mt-3 text-center brand-color pb-8">Journey Details</h1>
        <hr />
        <br />
        <form onSubmit={handleData}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Date of Journey
                </span>
              </label>
              <input
                type="date"
                placeholder="Pick date"
                name="journeyDate"
                className="input input-bordered h-10 rounded-md border-gray-300"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Date of Return
                </span>
              </label>
              <input
                type="date"
                placeholder="Pick date"
                name="returnDate"
                className="input input-bordered h-10 rounded-md border-gray-300"
                required
              />
            </div>
            <div>
              <div className="form-control">
                <p className="label-text font-bold mt-3 mb-1 text-gray-500">
                  Bus Type:
                </p>
                <div className="input-group">
                  <select
                    name="busType"
                    className="h-10 border border-gray-300 input-info w-full mb-2"
                  >
                    <option disabled selected>
                      select bus
                    </option>
                    <option>AC</option>
                    <option>NON AC</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Origin City ( with Boarding Point ){" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Dhaka"
                defaultValue="Dhaka"
                disabled
                name="originCity"
                className="input input-bordered rounded-md h-10 border-gray-300"
                required
              />
            </div>
            <div className="form-control ">
              <p className="label-text font-bold mt-3 mb-1 text-gray-500">
                Destination City ( with Dropping Point )
              </p>
              <div className="input-group">
                <select
                  name="destinationCity"
                  className="h-10 border border-gray-300 input-info rounded-md w-full mb-2"
                >
                  <option disabled selected>
                    Select Point
                  </option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                  <option>Barisha</option>
                  <option>Sylhet</option>
                  <option>Rangpur</option>
                  <option>Mymensingh</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Phone Number(Optional)
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                name="optional_phone"
                className="input input-bordered h-10 rounded-md border-gray-300"
              />
            </div>

            <div className="form-control ">
              <p className="label-text font-bold mt-3 mb-1 text-gray-500">
                No. of seats in bus{" "}
              </p>
              <div className="input-group">
                <select
                  name="seats"
                  className="h-10 border border-gray-300 input-info rounded-none w-full mb-2"
                >
                  <option disabled selected>
                    Number of Seat
                  </option>
                  <option>34 seats</option>
                  <option>36 seats</option>
                  <option>42 seats</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  No. of buses required{" "}
                </span>
              </label>
              <input
                type="number"
                placeholder=""
                name="buses"
                className="input input-bordered rounded-md h-10 border-gray-300"
                required
              />
            </div>
          </div>

          <h1 className="text-4xl mt-8 text-center brand-color pb-2">Contact Details</h1>
          <hr />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-7">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Contact Person Name
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={displayName}
                disabled
                name="name"
                className="input input-bordered rounded-md border-gray-300 h-10"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Mobile No.
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                name="phone"
                className="input input-bordered rounded-md border-gray-300 h-10"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Email
                </span>
              </label>
              <input
                defaultValue={email}
                disabled
                type="email"
                placeholder=""
                name="email"
                className="input input-bordered rounded-md border-gray-300 h-10"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Company Name
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                name="companyName"
                className="input input-bordered rounded-md border-gray-300 h-10"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-500">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                name="address"
                className="input input-bordered rounded-md border-gray-300 h-10"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6 items-end">
            <input
              className="btn btn-block  bg-orange-600 hover:bg-orange-700 text-white"
              type="submit"
              value="Submit Reservation Request"
              name=""
              id=""
            />
          </div>
        </form>
      </div>
      <BusRoute></BusRoute>

    </div>
  )
};

export default BookBusComponent;
