import React from "react";

import PageBanner from "../../../Component/Main/About/PageBanner";

import Parallax from "../../../Component/Main/About/Parallax";
import MissionVission from "../../../Component/Main/About/MissionVission";

const About = () => {
  const datas = [
    {
      title: "Love to innovate",
      description:
        "We are the pioneer of digitizing transportation in Bangladesh. We innovate services that solve daily hassles, all the while leveraging technology!",
      logo: "https://www.shohoz.com/v2/assets/img/item-icon1.svg",
    },
    {
      title: "Committed to Safety",
      description:
        "We go the extra mile when it comes to our commitment to safety. Since the inception of Shohoz, the company has gone above and beyond to ensure the safety of its valued passengers.",
      logo: "https://www.shohoz.com/v2/assets/img/item-icon4.svg",
    },
    {
      title: "Believe in Empowerment",
      description:
        "We absolutely believe in the economic empowerment of Bangladeshi people. Thus, offering freedom to choose from the multiple services to make life easier.",
      logo: "https://www.shohoz.com/v2/assets/img/item-icon2.svg",
    },
    {
      title: "Value People",
      description:
        "We are a people-driven organization and believe that our company’s growth lies with our employees. They are the key reason for our success.",
      logo: "https://www.shohoz.com/v2/assets/img/item-icon3.svg",
    },
    {
      title: "Taking Responsibility",
      description:
        "We dream of a sustainable future for our community. Wherefore we aspire to offer services that are value-for-money and do not harm our environment.",
      logo: "https://www.shohoz.com/v2/assets/img/item-icon6.svg",
    },
  ];

  const image = "https://i.ibb.co/ctPT13g/about-us.jpg";

  return (
    <div className="">
      <PageBanner
        img={image}
        title={"About us"}
        description="WE ARE COMMITTED TO REVOLUTIONIZE THE TRANSPORTATION LANDSCAPE IN BANGLADESH"
      />

      <div className="max-w-[1200px] mx-auto">
        <div className="lg:my-20 md:my-14 px-4 mx-auto gap-[4vw] sm:my-10 md:flex justify-center items-center container my-8">
          <div className="md:w-[50%]">
            <img
              src="https://i.ibb.co/DDJXzJF/bus-123sd.jpg"
              className="rounded-md"
              alt=""
            />
          </div>

          <div className="md:w-[50%]">
            <div className="space-y-4">
              <details
                className="group [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">What We Offer</h2>

                  <svg
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  DhakaTicket.com enables consumers to purchase tickets from any
                  location at any time, just by using your mobile phone. You can
                  rest assured that your payment will be transfer safely through
                  a highly secured payment channel. A customer can purchase
                  tickets through the Website and Mobile App. You will be
                  offered the list of available tickets based on your selection.
                  Then you can proceed for payment through the portal. In just a
                  few clicks, you can purchase tickets from anywhere! An SMS is
                  sent to the user once the purchase is confirmed. This SMS has
                  the reference number along with other ticket related
                  information
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">About Us?</h2>

                  <svg
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  DhakaTicket.com is a premium online booking portal which
                  allows you to purchase tickets for various bus services,
                  launch services, movies and events across the country. It also
                  lets you purchase travel tickets in the simplest, easiest,
                  smartest and most convenient way. Search for bus availability,
                  choose your preferred seat, purchase bus tickets with utmost
                  convenience using your mobile phone. It can't get simpler than
                  this!
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="px-5 my-10 lg:px-0 mx-auto">
          <h1 className="text-center text-4xl my-16">Our Values</h1>
          <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 justify-center justify-items-center lg:grid-cols-3 gap-5">
            {datas.map((item, index) => {
              return (
                <div
                  className="text-center space-y-3 md:mb-0 mb-3 h-72 p-5 rounded-md  hover:shadow-orange-700 shadow-lg"
                  key={index}
                >
                  <div className="flex justify-center items-center">
                    <img src={item.logo} alt="" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[24px] text-orange-600">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-black">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-10">
        <Parallax
          title={"Who we are?"}
          desc1={
            "We started our journey back in 2014 with one goal in mind- to make lives easier! As a technology-first company, we develop tech-driven solutions for the everyday challenges of Bangladeshi people.  a pioneer in Bangladesh’s travel industry is now the largest online ticket destination in the country. We put customers first and facilitate them with the freedom to choose from hundreds of operators and routes, compare prices, offer the best deals and safeguards- all within a few minutes and with just a few taps on their phone. "
          }
          desc2={
            "This is more than just a ticketing platform, It is a lifestyle! We empower our people by solving and simplifying their travel needs and let them enjoy traveling, the enjoyable way! "
          }
        />
      </div>
      <div>
        <MissionVission />
      </div>
    </div>
  );
};

export default About;
