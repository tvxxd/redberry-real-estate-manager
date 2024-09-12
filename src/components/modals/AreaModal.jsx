import InputFields from "./InputFields";
import AreaRange from "./AreaRange";
import styles from "./AreaModal.module.css";
import SelectButton from "../SelectButton";
function AreaModal() {
  return (
    <div className={styles.area}>
      <span className={styles.span}>ფართობის მიხედვით</span>

      <InputFields />
      <AreaRange />
      <SelectButton />
    </div>
  );
}

export default AreaModal;
