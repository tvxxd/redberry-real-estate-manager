import styles from "./SelectButton.module.css";

function SelectButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      არჩევა
    </button>
  );
}

export default SelectButton;
