import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BookTicket = () => {
  const loadUser = useContext(AuthContext);
  const { user } = loadUser;
  const [selectedSeats, setSelectedSeats] = useState([]);
  // const bookedSeat = ["H4", "H3", "G4", "A1"];
  const [bookedSeat, setBookedSeat] = useState([]);
  const [displaySelectSeat, setDisplaySelectSeat] = useState(false);
  const [searchBus, setSearchBus] = useState(null);

  // Load All Bus:
  const [allBus, setAllBus] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch("https://dhaka-bus-ticket-server.vercel.app/all-bus")
      .then((res) => res.json())
      .then((data) => {
        setAllBus(data);
      });
  }, [control, bookedSeat, displaySelectSeat]);

  const halfSeats1 = [
    "H4",
    "H3",
    "G4",
    "G3",
    "F4",
    "F3",
    "E4",
    "E3",
    "D4",
    "D3",
    "C4",
    "C3",
    "B4",
    "B3",
    "A4",
    "A3",
  ];
  const halfSeats2 = [
    "H2",
    "H1",
    "G2",
    "G1",
    "F2",
    "F1",
    "E2",
    "E1",
    "D2",
    "D1",
    "C2",
    "C1",
    "B2",
    "B1",
    "A2",
    "A1",
  ];

  // Handle Seat Selection:
  const [counter, setCounter] = useState(0);

  const handleSeatSelect = (seatNumber) => {
    const decision = selectedSeats?.includes(seatNumber);
    if (!decision) {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setCounter(counter + 1);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));

      setCounter(counter - 1);
    }
  };

  // Booked Ticket Using User Information:
  const [bookedTicketUsingUserInformation, setBookedTicketUsingUserInformation] = useState({});
  const handleData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const from = form.from.value;
    const to = form.to.value;
    // const quantity = form.quantity.value;
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
      busType,
      pick,
      schedule,
      bookedSeat: [],
      payment_status: "done",
      feedback: "pending"
    };
    setBookedTicketUsingUserInformation(data);
    const findBus = allBus?.find(bus => bus?.busType == busType && bus?.to == to && busType && bus?.date == date)

    setBookedSeat(findBus?.bookedSeat);
    findBus && setDisplaySelectSeat(true);
    setSearchBus(findBus);
    setSelectedSeats([]);
    setControl(!control);
  }
  const handleBookTicket = (bus) => {
    const busId = bus._id;
    const oldBookedSeat = bus.bookedSeat;
    console.log(oldBookedSeat);
    const newBookedSeat = selectedSeats;
    console.log(newBookedSeat);
    const updateBookedSeat = [...oldBookedSeat, ...newBookedSeat];
    console.log(updateBookedSeat);
    bookedTicketUsingUserInformation.bookedSeat = newBookedSeat
    bookedTicketUsingUserInformation.bookedDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    console.log(bookedTicketUsingUserInformation);

    const updateTicketBooking = {
      bus_id: busId,
      updateBookedSeat: updateBookedSeat,
    };
    fetch("https://dhaka-bus-ticket-server.vercel.app/book-ticket", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateTicketBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.matchedCount > 0) {
          setDisplaySelectSeat(false);
          setControl(!control);
          setCounter(0);
          Swal.fire({
            title: "Ticket Booked Successfully!",
            text: "",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch(err => console.log(err))

    // Booked Seat and Post it with User Information:
    fetch('https://dhaka-bus-ticket-server.vercel.app/book-my-ticket', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bookedTicketUsingUserInformation)
    })
      .then(res => res.json())
      .then(data => {
        if (data.matchedCount > 0) {
          setDisplaySelectSeat(false)
          setControl(!control);
          setCounter(0);
          Swal.fire({
            title: 'Ticket Booked Successfully!',
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
      .catch(err => console.log(err))
  }


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
            <div className="max-w-[1200px] mx-auto mt-16">
              <div className="bg-orange-50 py-10">
                <h1 className="text-4xl lg:text-5xl font-bold m-6 md:m-16 brand-color text-center">
                  Book Your Ticket
                </h1>
                <div className="grid md:grid-cols-2 gap-10  text-black rounded-lg">
                  <div>
                    <div className="p-6">
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
                            defaultValue={user?.displayName}
                            disabled
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
                            defaultValue={user?.email}
                            disabled
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
                                <option>Chattogram</option>
                                <option>Khulna</option>
                                <option>Rajshahi</option>
                                <option>Barishal</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                                <option>Mymensingh</option>
                              </select>
                            </div>
                          </div>
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
                              <option>Non-AC</option>
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
                              <option>Kallyanpur Bus Terminal</option>
                              <option>Arambagh Bus Terminal</option>
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
                            </select>
                          </div>
                        </div>
                        <div className="form-control mt-6">
                          <input
                            className="btn btn-block bg-orange-600 hover:bg-orange-700 text-white"
                            type="submit"
                            value="Search Seat"
                            name=""
                            id=""
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Seat Selection Part */}
                  <div className="bg-orange-50 py-10 flex justify-center items-center rounded-lg">
                    <div>
                      <h1 className="text-3xl font-extrabold brand-color text-center pb-8">
                        Select Your Seat
                      </h1>
                      <div className="flex justify-center items-center">
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            backgroundColor: "red",
                          }}
                        ></div>
                        <h4 className="ms-4">Already Booked</h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            backgroundColor: "rgb(252, 233, 85)",
                          }}
                        ></div>
                        <h4 className="ms-4">Available</h4>
                      </div>
                      <div className="grid grid-cols-2 mx-auto gap-x-14 mt-12">
                        {displaySelectSeat && (
                          <>
                            <div className="grid grid-cols-2">
                              {halfSeats1?.map((seat) => (
                                <button
                                  onClick={() => handleSeatSelect(seat)}
                                  className="btn m-2"
                                  style={{
                                    background:
                                      selectedSeats.includes(seat) ||
                                        bookedSeat?.includes(seat)
                                        ? "orangered"
                                        : "rgb(252, 233, 85)",
                                  }}
                                  disabled={
                                    bookedSeat?.includes(seat) ? true : false
                                  }
                                  key={seat}
                                >
                                  {seat}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-2 ">
                              {halfSeats2?.map((seat) => (
                                <button
                                  onClick={() => handleSeatSelect(seat)}
                                  className="btn mt-2 ms-2"
                                  style={{
                                    background:
                                      selectedSeats.includes(seat) ||
                                        bookedSeat?.includes(seat)
                                        ? "orangered"
                                        : "rgb(252, 233, 85)",
                                  }}
                                  disabled={
                                    bookedSeat?.includes(seat) ? true : false
                                  }
                                  key={seat}
                                >
                                  {seat}
                                </button>
                              ))}
                            </div>
                          </>
                        )}

                        <div>
                          {/* {useEffect(() => {
                          selectedSeats?.map((seat) => <p>{seat}</p>);
                        }, [selectedSeats])} */}
                        </div>
                      </div>

                      <div className="flex justify-center mt-4">
                        {counter > 0 && (
                          <button
                            onClick={() => handleBookTicket(searchBus)}
                            className="btn btn-block brand-btn"
                          >
                            Book Ticket
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
