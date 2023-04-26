import React from "react";
import "./AssignPage.css";

const agents = [
  {
    id: 1,
    name: "ExpressDelivery",
    location: "Ajni, Nagpur",
  },
  {
    id: 2,
    name: "Express Delivery",
    location: "Reshimbagh, Nagpur",
  },
  {
    id: 3,
    name: "Express Delivery",
    location: "Dharampeth, Nagpur",
  },
  {
    id: 4,
    name: "Express Delivery",
    location: "Mankapur, Nagpur",
  },
  {
    id: 5,
    name: "Express Delivery",
    location: "Manish Nagar, Nagpur",
  },
  {
    id: 6,
    name: "Express Delivery",
    location: "Mahal, Nagpur",
  },
  {
    id: 7,
    name: "Express Delivery",
    location: "Wardha Road, Nagpur",
  },
  {
    id: 8,
    name: "Express Delivery",
    location: "Sitaburdi, Nagpur",
  },
];

function AssignPage() {
  return (
    <div className="agent-page">
      <h1>Select a Delivery Agent</h1>
      <div className="agent-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <div className="agent-info">
              <h2>{agent.name}</h2>
              <p>{agent.location}</p>
              <button className="update-button">Send Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignPage;
