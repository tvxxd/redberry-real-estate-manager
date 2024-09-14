import styles from "./CancelButton.module.css";

function CancelButton({
  text = "გაუქმება",
  onClick,
  color = "#f93b1d",
  padding = "8px 14px",
  border = "none",
  hover = "no",
}) {
  return (
    <button
      style={{ color: color, padding: padding, border: border }}
      onClick={onClick}
      className={`${hover === "yes" ? styles.btnhover : ""} ${styles.btn}`}
    >
      {text}
    </button>
  );
}

export default CancelButton;
