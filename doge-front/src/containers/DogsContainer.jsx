import React from "react";
import styles from "../styles/DogsContainer.module.css";
import DogCard from "../components/DogCard";

const DogsContainer = ({ dogs }) => {
  return (
    <div className={styles.container}>
      {dogs.map((dog) => {
        return <DogCard dog={dog} key={dog.id}></DogCard>;
      })}
    </div>
  );
};

export default DogsContainer;
