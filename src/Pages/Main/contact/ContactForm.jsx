import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const cityNames = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    // Add more city names here
  ];
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="">
        <div className="md:space-y-6 space-y-3">
          <h1 className="md:text-5xl sm:text-3xl text-3xl leading-10 font-bold">
            Contact us
          </h1>
          <p className="md:text-2xl text-[20px] leading-4 font-normal">
            Thank you for reaching us! We are always happy to hear from you
          </p>
        </div>

        <div className="border-2 md:my-5 my-4 lg:my-7 shadow-lg p-10">
          <div className="grid">
            <label className="text-start my-2 px-1">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleFormChange}
              className="h-full rounded-md border bg-transparent py-2 px-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Bus</option>
              <option>Train</option>
              <option>Launch</option>
            </select>
          </div>

          <div className="lg:grid grid-cols-2 gap-5">
            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter name"
              />
            </div>

            <div className="grid">
              <label className="text-start my-2 px-1">Your City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                className="h-full w-full rounded-md border bg-transparent py-2 px-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                {cityNames.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-5">
            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Mobile Number
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter number"
              />
            </div>

            <div className="grid">
              <label className="text-start my-2 px-1 text-gray-500">
                Your Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label
              for="message"
              class="block  px-1 text-start my-2 text-gray-600 dark:text-gray-400"
            >
              Your Message
            </label>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              class="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            ></textarea>
          </div>

          <div className="flex items-start p-3">
            <button
              onClick={handleFormSubmit}
              className="py-4 px-5 bg-[#00C2C1] text-white rounded-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
