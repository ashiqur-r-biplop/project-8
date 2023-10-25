import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    axios("https://dhaka-bus-ticket-server.vercel.app/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="md:px-20 px-6 flex gap-2 bg-gray-950 py-6">

      <span className="brand-color font-bold">নোটিশঃ</span>
      <Marquee speed={90} delay={3}>
        <div className="">
          {notices.map((notice, i) => {
            return (
              <span className="text-white" key={i}>
                {notice?.notice}
              </span>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
