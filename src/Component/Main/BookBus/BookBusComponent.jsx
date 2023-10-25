// import React from "react";

import BusRoute from "../../../Shared/BusRoute/BusRoute";

const BookBusComponent = () => {

  const handleData = (e) => {
    e.preventDefault();
    const form = e.target;
    const journeyDate = form.journeyDate.value;
    const returnDate = form.returnDate.value;
    const busType = form.busType.value;
    const originCity = form.originCity.value;
    const destinationCity = form.destinationCity.value;
    const busOperator = form.busOperator.value;
    const seats = form.seats.value;
    const buses = form.buses.value;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const companyName = form.companyName.value;
    const address = form.address.value;

    const data = { journeyDate, email, returnDate, busType,originCity,destinationCity,busOperator, seats, buses,name,phone,companyName,address};
    console.log(data);
}


  return <div className="mt-24 container mx-auto mb-">

    <div className=' p-10 mb-6 bg-zinc-50 shadow-xl text-black rounded-lg'>
    {/* <p className="text-sm">NB:All(*)marks are required field.</p> */}
    <h1 className="text-2xl mt-3">Journey Details</h1>
    <hr />
    <br />
      <form onSubmit={handleData}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Date of Journey</span>
          </label>
          <input type="date" placeholder="Pick date" name='journeyDate' className="input input-bordered h-10 rounded-md border-gray-300" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Date of Return</span>
          </label>
          <input type="date" placeholder="Pick date" name='returnDate' className="input input-bordered h-10 rounded-md border-gray-300" required/>
        </div>
        <div>
        <div className="form-control">
          <p className="label-text font-bold mt-3 mb-1 text-gray-500">Bus Type:</p>
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
            <span className="label-text font-bold text-gray-500">Origin City ( with Boarding Point ) </span>
          </label>
          <input type="text" placeholder="Dhaka" readOnly name='originCity' className="input input-bordered rounded-md h-10 border-gray-300" required />
        </div>
        <div className="form-control ">
                                            <p className="label-text font-bold mt-3 mb-1 text-gray-500">Destination City ( with Dropping Point )</p>
                                            <div className="input-group">
                                                <select
                                                    name="destinationCity"
                                                    className="h-10 border border-gray-300 input-info rounded-md w-full mb-2"
                                                >
                                                    <option disabled selected>
                                                        select Point
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
            <span className="label-text font-bold text-gray-500">Prefered bus operator ( if any )</span>
          </label>
          <input type="text" placeholder="" name='busOperator' className="input input-bordered h-10 rounded-md border-gray-300" />
        </div>

        <div className="form-control ">
            <p className="label-text font-bold mt-3 mb-1 text-gray-500">No. of seats in bus </p>
            <div className="input-group">
              <select
                name="seats"
                className="h-10 border border-gray-300 input-info rounded-none w-full mb-2"
              >
                <option disabled selected>
                  select Point
                </option>
                <option>27 seats</option>
                <option>28 seats</option>
                <option>34 seats</option>
                <option>36 seats</option>
                <option>40 seats</option>
              </select>
            </div>
          </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">No. of buses required </span>
          </label>
          <input type="number" placeholder="" name='buses' className="input input-bordered rounded-md h-10 border-gray-300" required />
        </div>
        </div>

        <h1 className="text-2xl mt-10">Contact Details</h1>
        <hr />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-7">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Contact Person Name</span>
          </label>
          <input type="text" placeholder="" name='name' className="input input-bordered rounded-md border-gray-300 h-10" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Mobile No.</span>
          </label>
          <input type="number" placeholder="" name='phone' className="input input-bordered rounded-md border-gray-300 h-10"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Email</span>
          </label>
          <input type="email" placeholder="" name='email' className="input input-bordered rounded-md border-gray-300 h-10"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Company Name</span>
          </label>
          <input type="text" placeholder="" name='companyName' className="input input-bordered rounded-md border-gray-300 h-10"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-gray-500">Address</span>
          </label>
          <input type="text" placeholder="" name='address' className="input input-bordered rounded-md border-gray-300 h-10" required />
        </div>
        </div>

        <div className="form-control mt-6 items-end">
          <input className="btn btn-block  bg-orange-600 hover:bg-orange-700 text-white" type="submit" value='Submit Reservation Request' name="" id="" />
        </div>

        
      </form>
    </div>
      <BusRoute></BusRoute>

  </div>;
};

export default BookBusComponent;
