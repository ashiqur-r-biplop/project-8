import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeat = ["H4", "H3", "G4", "A1"];

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
      console.log(counter);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      console.log(selectedSeats);
      setCounter(counter - 1);
    }
  };
  console.log(selectedSeats);

  return (
    <div className="bg-orange-50 pt-8 md:m-12 p-4 m-4 rounded-lg">
      <h1 className="text-3xl font-extrabold brand-color text-center pb-8">
        Select Your Seat
      </h1>
      <div className="flex justify-center items-center">
        <div
          style={{ height: "15px", width: "15px", backgroundColor: "red" }}
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
      <div className="grid grid-cols-2 md:w-1/2 mx-auto gap-x-14 mt-12">
        <div className="grid grid-cols-2">
          {halfSeats1?.map((seat, i) => (
            <button
              onClick={() => handleSeatSelect(seat)}
              className="btn mt-2 ms-2"
              style={{
                background: selectedSeats.includes(seat)
                  ? "orangered"
                  : "rgb(252, 233, 85)",
              }}
              disabled={bookedSeat.includes(seat) ? true : false}
              key={i}
            >
              {seat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 ">
          {halfSeats2?.map((seat, i) => (
            <button
              onClick={() => handleSeatSelect(seat)}
              className="btn mt-2 ms-2"
              style={{
                background: selectedSeats.includes(seat)
                  ? "orangered"
                  : "rgb(252, 233, 85)",
              }}
              disabled={bookedSeat.includes(seat) ? true : false}
              key={i}
            >
              {seat}
            </button>
          ))}
        </div>
        <div>
          {useEffect(() => {
            selectedSeats?.map((seat, i) => <p key={i}>{seat}</p>);
          }, [selectedSeats])}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {counter > 0 && (
          <button className="btn btn-block brand-btn">Book Ticket</button>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;
