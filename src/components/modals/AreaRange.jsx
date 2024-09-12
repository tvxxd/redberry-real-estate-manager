import styles from "./AreaRange.module.css";
import { formatPrice } from "../../utils/formatPrice.js";

function AreaRange() {
  const AREAS = [50000, 50000, 50000, 50000, 50000];
  return (
    <div className={styles.areaRange}>
      <div className={styles.min}>
        <span className={styles.span}>მინ. მ&#178;</span>
        {AREAS.map((price) => (
          <p>{formatPrice(price)} მ&#178;</p>
        ))}
      </div>
      <div className={styles.max}>
        <span className={styles.span}>მაქს. მ&#178;</span>
        {AREAS.map((price) => (
          <p>{formatPrice(price)} მ&#178;</p>
        ))}
      </div>
    </div>
  );
}

export default AreaRange;
