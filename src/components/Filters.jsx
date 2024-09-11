import styles from "./Filters.module.css";
import Shape from "../icons/Shape.jsx";

function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.regions}>
        <span>რეგიონი</span>
        <Shape />
      </div>
      <div className={styles.price}>
        <span>საფასო კატეგორია</span>
        <Shape />
      </div>
      <div className={styles.area}>
        <span>ფართობი</span>
        <Shape />
      </div>
      <div className={styles.rooms}>
        <span>საძინებლების რაოდენობა</span>
        <Shape />
      </div>
    </div>
  );
}

export default Filters;
