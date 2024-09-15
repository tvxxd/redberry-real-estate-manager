import styles from "./ItemDetails.module.css";
import ApartAndAgentDetails from "./ApartAndAgentDetails";

function ItemDetails({ listing }) {
  return (
    <div className={styles.itemDetails}>
      <div className={styles.div}>
        <img className={styles.img} src={listing.image} alt="listing img" />
        <p className={styles.publishDate}>გამოქვეყნების თარიღი 08/08/24</p>
      </div>
      <div className={styles.details}>
        <ApartAndAgentDetails listing={listing} />
      </div>
    </div>
  );
}

export default ItemDetails;
