import styles from "./SelectButton.module.css";

function SelectButton({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

export default SelectButton;
