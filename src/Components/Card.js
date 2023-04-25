import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, quantity }) => {
  const [Quantity, setQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setQuantity(parseInt(Quantity) + 1);
  };

  const decreaseQuantity = () => {
    if (parseInt(Quantity) > 0) {
      setQuantity(parseInt(Quantity) - 1);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="quantity-control">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <p className="card-quantity">{Quantity}Kg in stock</p>
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>
        <Link to="/Update" className="heading">
          <button className="update-button">Update Stock</button>
        </Link>
      </div>
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    title: "Tomato",
    quantity: "10",
  },
  {
    id: 2,
    title: "Potato",
    quantity: "30",
  },
  {
    id: 3,
    title: "Apple",
    quantity: "5",
  },
  {
    id: 4,
    title: "Onion",
    quantity: "15",
  },
  {
    id: 5,
    title: "Carrot",
    quantity: "12",
  },
  {
    id: 6,
    title: "Tomato",
    quantity: "10",
  },
  {
    id: 7,
    title: "Potato",
    quantity: "30",
  },
  {
    id: 8,
    title: "Apple",
    quantity: "5",
  },
  {
    id: 9,
    title: "Onion",
    quantity: "15",
  },
  {
    id: 8,
    title: "Apple",
    quantity: "5",
  },
];

const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          quantity={card.quantity}
          image={card.image}
        />
      ))}
    </div>
  );
};

const Last = () => {
  return (
    <div className="container-main">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;