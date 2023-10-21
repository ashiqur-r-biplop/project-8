import React from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Bus Ticket | ${title}`;
  }, [title]);
};

export default UseTitle;
