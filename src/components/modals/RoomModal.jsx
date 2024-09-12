import SelectButton from "../SelectButton";
import styles from "./RoomModal.module.css";

function RoomModal() {
  return (
    <div className={styles.rooms}>
      <span className={styles.span}>საძინებლების რაოდენობა</span>
      <input className={styles.input} placeholder="2" type="text" />
      <SelectButton />
    </div>
  );
}

export default RoomModal;
