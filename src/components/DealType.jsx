import styles from "./DealType.module.css";

function DealType({ value, onChange }) {
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };
  return (
    <div>
      <div
        className={styles.span}
        style={{ fontWeight: "bold", marginBottom: "8px" }}
      >
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
            name="is_rental"
            id="forSale"
            value={0}
            checked={value === 0}
            onChange={handleChange}
          />
          <label htmlFor="forSale">იყიდება</label>
        </div>
        <div>
          <input
            className={styles.input}
            type="radio"
            name="is_rental"
            id="forRent"
            value={1}
            checked={value === 1}
            onChange={handleChange}
          />
          <label htmlFor="forRent">ქირავდება</label>
        </div>
      </div>
    </div>
  );
}

export default DealType;
