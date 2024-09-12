import styles from "./PriceRange.module.css";
import { formatPrice } from "../../utils/formatPrice.js";

function PriceRange({}) {
  const PRICES = [50000, 100000, 150000, 200000, 250000, 300000];
  return (
    <div className={styles.price}>
      <div className={styles.min}>
        <span className={styles.span}>მინ. ფასი</span>
        {PRICES.map((price) => (
          <p>{formatPrice(price)} ₾</p>
        ))}
      </div>
      <div className={styles.max}>
        <span className={styles.span}>მაქს. ფასი</span>
        {PRICES.map((price) => (
          <p>{formatPrice(price)} ₾</p>
        ))}
      </div>
    </div>
  );
}

export default PriceRange;
