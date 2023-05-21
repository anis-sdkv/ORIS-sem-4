import styles from "../styles/DogInfoCard.module.css";
import placeholder from "../static/Placeholder.png";

const DogInfoCard = ({ dog }) => {
  console.log(dog);
  return (
    <div className={styles.dog_card}>
      <div className={styles.img_overlay}>
        <div className={styles.main_info}>
          <div className={styles.breed_name}>{dog.name}</div>
          {dog.bred_for && <div>for {dog.bred_for}</div>}
        </div>
      </div>
      <img src={dog.image ? dog.image.url : placeholder}></img>
      <div className={styles.additional_info}>
        Additional info
        <div className={styles.info_block}>
          {dog.weight.metric && (
            <div className={styles.info_line}>
              <span className={styles.data_title}>Weight </span>
              <span className={styles.data_span}>{dog.weight.metric} kg</span>
            </div>
          )}
          {dog.height.metric && (
            <div className={styles.info_line}>
              <span className={styles.data_title}>Height </span>
              <span className={styles.data_span}>{dog.height.metric} cm</span>
            </div>
          )}
          {dog.life_span && (
            <div className={styles.info_line}>
              <span className={styles.data_title}>Life span </span>
              <span className={styles.data_span}>{dog.life_span}</span>
            </div>
          )}
          {dog.breed_group && (
            <div className={styles.info_line}>
              <span className={styles.data_title}>Breed group </span>
              <span className={styles.data_span}>{dog.breed_group}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogInfoCard;