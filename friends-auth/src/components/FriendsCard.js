import React from "react";
import "../App.css";

const FriendsCard = (props) => {
  return (
    <ul className="friend">
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </ul>
  );
};

export default FriendsCard;
