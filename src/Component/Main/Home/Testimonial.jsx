import React from 'react'
import './Testimonial.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const slides = [
    {
      title: "Jhon Deo",
      address: "Khulna",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, exercitationem molestias possimus facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam,",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?4",
    },
    {
      title: "Chris Jhonson",
      address: "Rangpur",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, exercitationem molestias possimus facere.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam,",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?5",
    },
  ];

  return (
    <div className='container mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="bg-white w-full h-full flex flex-col  my-6 shadow-lg"
            >
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 brand-color"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {slide.description}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 brand-color"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-black text-gray-50">
                <img
                  src={slide.imageUrl}
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
                />
                <p className="text-xl font-semibold brand-color">{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
}

export default Testimonial