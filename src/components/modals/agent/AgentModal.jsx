import SelectButton from "../../SelectButton";
import UploadFile from "../../UploadFile";
import Input from "../Input";
import styles from "./AgentModal.module.css";
import CancelButton from "../../CancelButton";
import Checkmark from "../../../icons/Checkmark";
import { useEffect } from "react";

function AgentModal({ onClose }) {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form action="">
        <div className={styles.agentModal}>
          <span
            style={{
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "3.875rem",
            }}
          >
            აგენტის დამატება
          </span>
          <div className={styles.wrapper}>
            <div>
              <label className={styles.label} htmlFor="name">
                სახელი <span className={styles.required}>*</span>
              </label>
              <Input minChar={2} name="name" />
              <span>
                <Checkmark /> მინიმუმ ორი სიმბოლო
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="lastname">
                გვარი
              </label>
              <Input required={false} name="lastname" />
              <span>
                <Checkmark /> მინიმუმ ორი სიმბოლო
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="mail">
                ელ-ფოსტა <span className={styles.required}>*</span>
              </label>
              <Input name="mail" />
              <span>
                <Checkmark /> გამოიყენეთ @redberry.ge ფოსტა
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="number">
                ტელეფონის ნომერი
              </label>
              <Input required={false} name="number" />
              <span>
                <Checkmark /> მხოლოდ რიცხვები
              </span>
            </div>
            <div>
              <label className={styles.label} htmlFor="photo">
                ატვირთეთ ფოტო <span className={styles.required}>*</span>
              </label>
              <UploadFile htmlFor="photo" />
              <Input id="photo" accept="image/*" name="photo" type="file" />
            </div>
          </div>
          <div className={styles.buttons}>
            <CancelButton onClick={onClose} />
            <SelectButton
              type="submit"
              onSubmit={handleSubmit}
              text="დაამატე აგენტი"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AgentModal;
