import Plus from "../icons/Plus";
import styles from "./AddAgentButton.module.css";

function AddAgentButton({ onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.btn}>
        <Plus color="#F93B1D" />
        <span>აგენტის დამატება</span>
      </button>
    </>
  );
}

export default AddAgentButton;
