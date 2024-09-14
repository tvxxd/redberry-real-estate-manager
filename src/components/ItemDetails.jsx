import styles from "./ItemDetails.module.css";
import ApartAndAgentDetails from "./ApartAndAgentDetails";

function ItemDetails() {
  return (
    <div className={styles.itemDetails}>
      <div>
        <img
          className={styles.img}
          src="https://preview.redd.it/i-keep-finding-random-photos-saved-on-my-iphone-v0-xv34gm5optkc1.jpeg?width=1170&format=pjpg&auto=webp&s=3c2a56d0d9979b9d9c21b9f3229d134a41a6eca1"
          alt=""
        />
        <p className={styles.publishDate}>გამოქვეყნების თარიღი 08/08/24</p>
      </div>
      <div className={styles.details}>
        <ApartAndAgentDetails />
      </div>
    </div>
  );
}

export default ItemDetails;
