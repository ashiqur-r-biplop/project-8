import React from "react";
import SeatSelection from "../../../Component/Main/BookTicket/SeatSelection";

const BookTicket = () => {
  const handleData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const from = form.from.value;
    const to = form.to.value;
    const quantity = form.quantity.value;
    const busType = form.busType.value;
    const pick = form.pick.value;
    const schedule = form.schedule.value;

    const data = {
      name,
      email,
      phone,
      date,
      from,
      to,
      quantity,
      busType,
      pick,
      schedule,
    };
    console.log(data);
  };
  return (
    <>
      <div className="mx-auto ">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl lg:text-5xl font-bold m-6 md:m-16 text-orange-600 text-center">
              Book Bus Ticket
            </h1>
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className=" p-6 bg-orange-50 text-black rounded-lg">
                    <form onSubmit={handleData}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold text-lg">
                            Name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          className="input input-bordered rounded-md border-orange-400"
                        />
                      </div>
                      <div className="form-control mb-2 mt-2">
                        <label className="label">
                          <span className="label-text font-semibold text-lg">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          className="input input-bordered rounded-md border-orange-400"
                        />
                      </div>
                      <div className="form-control mb-2 mt-2">
                        <label className="label">
                          <span className="label-text font-semibold text-lg">
                            Phone
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phone"
                          className="input input-bordered rounded-md border-orange-400"
                        />
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text font-semibold text-lg">
                            Journey Date
                          </span>
                        </label>
                        <input
                          type="date"
                          placeholder="Date"
                          name="date"
                          className="input input-bordered rounded-md border-orange-400"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 ">
                        <div className="form-control ">
                          <label className="label">
                            <span className="label-text font-semibold text-lg">
                              From
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="From"
                            defaultValue={"Dhaka"}
                            readOnly
                            name="from"
                            className="input input-bordered rounded-md border-orange-400"
                          />
                        </div>

                        <div className="form-control ">
                          <p className="label-text font-semibold text-lg mt-3 mb-1">
                            To:
                          </p>
                          <div className="input-group">
                            <select
                              name="to"
                              className="select select-bordered border-orange-400 input-info rounded-md w-full mb-2"
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
                      </div>

                      <div className="form-control mt-2 mb-2">
                        <label className="label">
                          <span className="label-text font-semibold text-lg">
                            Ticket Quentity
                          </span>
                        </label>
                        <input
                          type="number"
                          placeholder="Quantity"
                          name="quantity"
                          className="input input-bordered rounded-md border-orange-400"
                        />
                      </div>

                      <div className="form-control ">
                        <p className="label-text font-semibold text-lg mt-2 mb-2">
                          Bus Type:
                        </p>
                        <div className="input-group">
                          <select
                            name="busType"
                            className="select select-bordered border-orange-400 input-info w-full mb-2"
                          >
                            <option disabled selected>
                              select bus
                            </option>
                            <option>AC</option>
                            <option>NON AC</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-control ">
                        <p className="label-text font-semibold text-lg mt-2">
                          Pick Point:
                        </p>
                        <div className="input-group">
                          <select
                            name="pick"
                            className="select select-bordered border-orange-400 input-info rounded-none w-full mb-2"
                          >
                            <option disabled selected>
                              select Point
                            </option>
                            <option>Gabtoli Bus Terminal</option>
                            <option>Sayedabad Bus Terminal</option>
                            <option>Mohakhali Bus Terminal</option>
                            <option>Kalabagan Bus Stand</option>
                            <option>Jatrabari Bus Terminal</option>
                            <option>Gulistan Bus Terminal</option>
                            <option>Kallyanpur Bus Stand</option>
                            <option>Arambagh Bus Stand</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-control ">
                        <p className="label-text font-semibold text-lg mt-2">
                          Schedule:
                        </p>
                        <div className="input-group">
                          <select
                            name="schedule"
                            className="select select-bordered border-orange-400 input-info rounded-none w-full mb-2"
                          >
                            <option disabled selected>
                              select schedule
                            </option>
                            <option>7:00 AM</option>
                            <option>9:00 AM</option>
                            <option>11:00 AM</option>
                            <option>1:00 PM</option>
                            <option>3:00 PM</option>
                            <option>5:00 PM</option>
                            <option>8:00 PM</option>
                            <option>11:00 PM</option>
                            <option>3:00 AM</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-control mt-6">
                        <input
                          className="btn btn-block bg-orange-600 hover:bg-orange-700 text-white"
                          type="submit"
                          value="Save"
                          name=""
                          id=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <SeatSelection></SeatSelection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
