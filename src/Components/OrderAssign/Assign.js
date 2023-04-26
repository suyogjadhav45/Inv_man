import React from "react";
import Sidebar from "../Sidebar";
import AssignBar from "./AssignBar";
import AssignPage from "./AssignPage";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <AssignBar />
        <AssignPage />
      </div>
    </div>
  );
};

export default Queue;
