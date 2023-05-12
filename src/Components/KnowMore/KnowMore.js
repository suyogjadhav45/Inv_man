import React from "react";
import { Link } from "react-router-dom";
import "./KnowMore.css";

const orders = [
  {
    orderNumber: "12345",
    title: "Product 1",
    description: "This is the description of Product 1.",
    quantity: 5,
    address: "123 Main Street, City, Country",
  },
  // Add more orders as needed
];

const KnowMorePage = () => {
  return (
    <div className="know-more-page">
      {orders.map((order) => (
        <div key={order.orderNumber} className="order-card">
          <h2>Order ID: {order.orderNumber}</h2>
          <h3>{order.title}</h3>
          <p>Description: {order.description}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Address: {order.address}</p>
          <div className="btn-detail">
            <Link to="/orderassign" className="update-button-detail">
              Assign
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KnowMorePage;
