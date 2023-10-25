import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
const Feedback = () => {
    const { axiosSecure } = UseAxiosSecure();
    const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
      const feedbackMessage = form.message.value;
      const userFeedback = {
          name,photo,rating,feedbackMessage
      }

    //   console.log(name, photo, rating, feedbackMessage);
      axiosSecure
        .post("/user-feedback", userFeedback)
        .then((res) => {
          console.log(res.data.result);
          if (res.data.result.acknowledged === true) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your feedback is recorded",
              showConfirmButton: false,
              timer: 1500,
            });
            }
            form.reset();
        })
        .catch((e) => {
          console.log("error to update", e);
        });
  };
  return (
    <div className="pt-24 container">
      <p className="text-center md:py-4 text-sm md:text-2xl text-gray-500">
        Please give your valueable feedback
      </p>

      <div>
        <section className="p-6 text-gray-800">
          <form
            onSubmit={handleSubmit}
            novalidate=""
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
          >
            <div>
              <label for="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                              placeholder="Your name"
                              defaultValue={user?.name}
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-100"
              />
            </div>
            <div>
              <label for="photo" className="block mb-1 ml-1">
                Photo
              </label>
              <input
                id="photo"
                type="text"
                              placeholder="Your Photo"
                              defaultValue={user?.photourl}
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-100"
              />
            </div>
            <div>
              <label for="Rating" className="block mb-1 ml-1">
                Rating
              </label>
              <input
                id="rating"
                type="number"
                placeholder="Your rating out of 5"
                min="1"
                max="5"
                required="true"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-100"
              />
            </div>

            <div>
              <label for="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                required="true"
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-purple-600 focus:ri hover:ri text-gray-50"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Feedback;
