import styles from "./SelectButton.module.css";

function SelectButton({ onClick, text = "არჩევა", onSubmit, type }) {
  return (
    <button type={type} onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

export default SelectButton;
