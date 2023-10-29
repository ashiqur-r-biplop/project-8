import React from "react";
import {
  BsFillBusFrontFill,
  BsFillHandThumbsUpFill,
  BsPersonVcardFill,
  BsFillAwardFill,
} from "react-icons/bs";

const Featured = () => {
  return (
    <div className="max-w-[1200px]  py-6  mx-auto">
      <div className="grid md:grid-cols-2 gap-x-4">
        <div>
          <div>
            <img src="" className="w-full min-h-full" />
          </div>
        </div>
        <div className="bg-black p-4 w-full h-full">
          <p className="brand-color text-sm capitalize">Why choose us</p>
          <h1 className="text-white mt-2 md:text-2xl">
            We are experts in bus charters company since 1989!
          </h1>
          <p className="text-white text-xs py-2">
            In this edition of our newsletter, we want to shine a spotlight on
            you, our valued customer. Your trust in our Company means the world
            to us, and we want to take a moment to celebrate your loyalty and
            support.
          </p>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-2">
            <div>
              <div className="flex gap-x-4 gap-y-4 justify-center">
                <div className="flex items-center">
                  <BsFillBusFrontFill className="brand-color text-2xl" />
                </div>
                <div>
                  <span className="text-2xl text-white">40 +</span>
                  <p className="text-white">Buses Ready</p>
                </div>
              </div>
              <div className="flex gap-x-4 gap-y-4 justify-center">
                <div className="flex items-center">
                  <BsFillBusFrontFill className="brand-color text-2xl" />
                </div>
                <div>
                  <span className="text-2xl text-white">40 +</span>
                  <p className="text-white">Satisfied Customer</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-center">
                <div className="flex items-center">
                  <BsFillBusFrontFill className="brand-color text-2xl" />
                </div>
                <div>
                  <span className="text-2xl text-white">40 +</span>
                  <p className="text-white">Booking Done</p>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="flex items-center">
                  <BsFillBusFrontFill className="brand-color text-2xl" />
                </div>
                <div>
                  <span className="text-2xl text-white">40 +</span>
                  <p className="text-white">Buses Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
