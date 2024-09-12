import styles from "./CancelButton.module.css";

function CancelButton({ text = "გაუქმება", onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

export default CancelButton;
