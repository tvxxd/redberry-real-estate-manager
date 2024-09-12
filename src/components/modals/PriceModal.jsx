import styles from "./PriceModal.module.css";
import InputFields from "./InputFields";
import PriceRange from "./PriceRange";
import SelectButton from "../SelectButton";

function PriceModal() {
  return (
    <div className={styles.price}>
      <span className={styles.span}>ფასის მიხედვით</span>
      <InputFields />
      <PriceRange />
      <SelectButton />
    </div>
  );
}

export default PriceModal;
