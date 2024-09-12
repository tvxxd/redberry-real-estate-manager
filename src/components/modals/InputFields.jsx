import styles from "./InputFields.module.css";

function InputFields() {
  return (
    <div className={styles.inputs}>
      <input className={styles.input} placeholder="დან" type="text" />
      <input className={styles.input} placeholder="დან" type="text" />
    </div>
  );
}

export default InputFields;
