import React from "react";
import Sidebar from "../Sidebar";
import NavBar from "./NavBar";
import QueuePage from "./QueuePage";

const Queue = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <NavBar />
        <QueuePage />
      </div>
    </div>
  );
};

export default Queue;
