import Area from "../icons/Area";
import Bed from "../icons/Bed";
import Location from "../icons/Location";
import Code from "../icons/Code";
import styles from "./Item.module.css";
import { formatPrice } from "../utils/formatPrice.js";

/**
 * Item component displays info about a property
 * @param item - properties object
 * @returns jsx - rendered item component
 */
function Item({ item }) {
  return (
    <div id="item" className={styles.item}>
      <p className={styles.available}>
        {item.is_rental === 0 ? "იყიდება" : "ქირავდება"}
      </p>
      <img className={styles.img} src={item.image} alt="" />
      <div className={styles.details}>
        <span className={styles.price}>{formatPrice(item.price)} ლ</span>
        <p className={styles.location}>
          <Location />
          <span>{item.address}</span>
        </p>
        <div className={styles.apartInfo}>
          <span className={styles.span}>
            <Bed /> {item.bedrooms}
          </span>
          <span className={styles.span}>
            <Area /> {item.area} მ&#178;
          </span>
          <span className={styles.span}>
            <Code /> {item.zip_code}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;
