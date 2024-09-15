import { useState } from "react";
import Plus from "../icons/Plus";
import styles from "./AddListingButton.module.css";

function AddListingButton({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Plus color={isHovered ? "#f93b1d" : "#fff"} />
      <span>ლისტინგის დამატება</span>
    </button>
  );
}

export default AddListingButton;
