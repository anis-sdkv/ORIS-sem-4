import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/DogCard.module.css";
import placeholder from "../static/Placeholder.png";

const DogCard = ({ dog }) => {
  const navigate = useNavigate();
  const showMore = () => navigate(`/dogs/${dog.id}`, { state: dog });

  return (
    <div onClick={showMore} className={styles.card}>
      <div className={styles.img_overlay} />
      <img
        className={styles.dog_image}
        src={dog.image ? dog.image.url : placeholder}
      />
      <div className={styles.text_block}>
        <div className={styles.dog_name}>{dog.name}</div>
        {dog.bred_for && (
          <div className={styles.card_text}>for {dog.bred_for}</div>
        )}
      </div>
    </div>
  );
};

export default DogCard;
