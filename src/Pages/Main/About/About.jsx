import React from "react";
import Banner from "../../../Component/Main/Home/Banner";

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

  return (
    <div className="">
      <Banner></Banner>
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
                  <h2 className="font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="px-5 my-10 lg:px-0 mx-auto">
          <h1 className="text-center text-4xl my-16">Our Values</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center lg:grid-cols-3 gap-5">
            {datas.map((item, index) => {
              return (
                <div
                  className="text-center space-y-3 md:mb-0 mb-3 h-72 p-5 rounded-md  hover:shadow-[#2B9444] shadow-lg"
                  key={index}
                >
                  <div className="flex justify-center items-center">
                    <img src={item.logo} alt="" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[24px]">{item.title}</h4>
                    <p className="text-[14px] text-[#919aa3]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
