import Area from "../icons/Area";
import Bed from "../icons/Bed";
import Location from "../icons/Location";
import Code from "../icons/Code";
import styles from "./Item.module.css";

function Item() {
  return (
    <div id="item" className={styles.item}>
      <p className={styles.available}>ქირავდება</p>
      <img
        className={styles.img}
        src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        alt=""
      />
      <div className={styles.details}>
        <span className={styles.price}>80 000ლ</span>
        <p className={styles.location}>
          <Location />
          <span>თბილისი, ი. ჭავჭავაძის 53</span>
        </p>
        <div className={styles.apartInfo}>
          <span className={styles.span}>
            <Bed /> 2
          </span>
          <span className={styles.span}>
            <Area /> 55მ
          </span>
          <span className={styles.span}>
            <Code /> 1155
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;
