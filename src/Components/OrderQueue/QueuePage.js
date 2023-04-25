import React from "react";
import "./QueuePage.css";
import { Link } from "react-router-dom";

const orders = [
  {
    orderNumber: "12345",
    details: "Vegetables",
  },
  {
    orderNumber: "23456",
    details: "Fruits",
  },
  {
    orderNumber: "34567",
    details: "Vegetables",
  },
  {
    orderNumber: "12243",
    details: "Fruits",
  },
  {
    orderNumber: "23324",
    details: "Vegetables",
  },
  {
    orderNumber: "86767",
    details: "Fruits",
  },
  {
    orderNumber: "89790",
    details: "Vegetables",
  },
  {
    orderNumber: "867637",
    details: "Fruits",
  },
];

const QueuePage = () => {
  return (
    <div className="queue-page">
      <div className="order-row">
        <div className="order-row-title">Order Number</div>
        <div className="order-row-title">Items</div>
        <div className="order-row-title">Buttons</div>
      </div>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.orderNumber} className="order-card">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <div className="btn">
              <Link to="/orderassign" className="update-button">
                Know More
              </Link>
              <Link to="/orderassign" className="update-button">
                Assign
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueuePage;
