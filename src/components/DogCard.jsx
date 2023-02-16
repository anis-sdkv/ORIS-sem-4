import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/MyCard.css";

const DogCard = ({ dog }) => {
  const navigate = useNavigate();
  const showMore = () => navigate(`/dogs/${dog.id}`, { state: dog });

  return (
    <div onClick={showMore} className="card">
      <div className="cardContent">
        <strong>
          {dog.id}. {dog.name}
        </strong>
        <div>{dog.bred_for}</div>
      </div>
    </div>
  );
};

export default DogCard;
