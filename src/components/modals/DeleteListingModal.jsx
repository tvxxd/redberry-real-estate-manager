import { useEffect } from "react";
import CancelButton from "../CancelButton";
import SelectButton from "../SelectButton";
import styles from "./DeleteListingModal.module.css";

function DeleteListingModal({ onClose }) {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Event listeners for outside clicks and Escape key press
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.deleteModal}>
        <p>გსურთ წაშალოთ ლისტინგი?</p>
        <div style={{ display: "flex", columnGap: "0.9375rem" }}>
          <CancelButton onClick={onClose} border="1px solid #F93B1D" />
          <SelectButton text="დადასტურება" />
        </div>
      </div>
    </div>
  );
}

export default DeleteListingModal;
