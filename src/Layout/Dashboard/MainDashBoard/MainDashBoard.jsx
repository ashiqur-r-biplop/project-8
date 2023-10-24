import React from "react";
import Sidebar from "../../../Component/Dashboard/Sidebard/Sidebar";
import { Outlet } from "react-router-dom";

const MainDashBoard = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainDashBoard;
