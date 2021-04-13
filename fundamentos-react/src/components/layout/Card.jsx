import "./Card.css";
import React from "react";

const Card = (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#CCC",
    borderColor: props.color || "#CCC",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Card;
