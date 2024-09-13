import styles from "./DealType.module.css";

function DealType() {
  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        გარიგების ტიპი
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "16.625rem",
          alignItems: "center",
        }}
      >
        <div>
          <input
            className={styles.input}
            type="radio"
            name="listingType"
            id="forSale"
          />
          <label htmlFor="forSale">იყიდება</label>
        </div>
        <div>
          <input
            className={styles.input}
            type="radio"
            name="listingType"
            id="forRent"
          />
          <label htmlFor="forRent">ქირავდება</label>
        </div>
      </div>
    </div>
  );
}

export default DealType;
