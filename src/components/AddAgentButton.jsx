import Plus from "../icons/Plus";
import styles from "./AddAgentButton.module.css";

function AddAgentButton() {
  return (
    <button className={styles.btn}>
      <Plus color="#F93B1D" />
      <span>აგენტის დამატება</span>
    </button>
  );
}

export default AddAgentButton;
