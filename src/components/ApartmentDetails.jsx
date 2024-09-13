import Checkmark from "../icons/Checkmark";
import Input from "./modals/Input";
import styles from "./ApartmentDetails.module.css";
import UploadFile from "./UploadFile";
function ApartmentDetails() {
  return (
    <div>
      <span className={styles.span} style={{ fontWeight: "bold" }}>
        ბინის დეტალები
      </span>
      <div
        style={{
          marginTop: "1.375rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto auto auto",
          gridRowGap: "1.5rem",
          gridColumnGap: "1.5rem",
        }}
      >
        <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
          <label className={styles.label} htmlFor="price">
            ფასი
          </label>
          <Input type="number" />
          <span>
            <Checkmark /> მხოლოდ რიცხვები
          </span>
        </div>
        <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
          <label className={styles.label} htmlFor="area">
            ფართობი
          </label>
          <Input type="number" />
          <span>
            <Checkmark /> მხოლოდ რიცხვები
          </span>
        </div>
        <div style={{ gridColumn: "1 / 3", gridRow: "2 / 3" }}>
          <label className={styles.label} htmlFor="area">
            საძინებლების რაოდენობა <span className={styles.required}>*</span>
          </label>
          <Input type="number" />
          <span>
            <Checkmark /> მხოლოდ რიცხვები
          </span>
        </div>
        <div style={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
          <label className={styles.label} htmlFor="description">
            აღწერა <span className={styles.required}>*</span>
          </label>
          <textarea
            style={{
              width: "100%",
              height: "8.4375rem",
              display: "block",
              borderRadius: "6px",
              padding: "0.9375rem",
              fontSize: "1.25rem",
              outline: "none",
            }}
            name="description"
            id=""
          ></textarea>
          <span>
            <Checkmark /> მინიმუმ ხუთი სიტყვა
          </span>
        </div>
        <div style={{ gridColumn: "1 / 3", gridRow: "4 / 5" }}>
          <label className={styles.label} htmlFor="photo">
            ატვირთეთ ფოტო <span className={styles.required}>*</span>
          </label>
          <UploadFile htmlFor="photo" />
          <Input id="photo" accept="image/*" name="photo" type="file" />
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetails;
