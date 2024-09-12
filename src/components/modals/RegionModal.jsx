import styles from "./RegionModal.module.css";
import SelectButton from "../SelectButton";
function RegionModal({ regions }) {
  return (
    <div className={styles.regions}>
      <span className={styles.span}>რეგიონის მიხედვით</span>
      {regions.map((region) => (
        <div className={styles.region}>
          <input className={styles.input} id={region.id} type="checkbox" />
          <span>{region.name}</span>
        </div>
      ))}
      <SelectButton />
    </div>
  );
}

export default RegionModal;
