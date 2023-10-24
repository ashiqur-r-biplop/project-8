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
    <div className="max-w-[1200px] mx-auto">
      <Marquee speed={100} delay={3}>
        <div className="flex gap-2">
          {notices.map((notice, i) => {
            return (
              <span key={i}>
                notice{i + 1} : {notice?.notice},
              </span>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
