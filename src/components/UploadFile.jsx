import PlusCircle from "../icons/PlusCircle";
import styles from "./UploadFile.module.css";

function UploadFile({
  htmlFor,
  width = "100%",
  cursor = "pointer",
  borderType = "dashed",
  borderColor = "#ccc",
  borderRadius = "8px",
  display = "inline-block",
  padding = "43px 0",
  textAlign = "center",
}) {
  return (
    <>
      <label
        style={{
          width: width,
          cursor: cursor,
          border: `1px ${borderType} ${borderColor}`,
          display: display,
          padding: padding,
          textAlign: textAlign,
          borderRadius: borderRadius,
        }}
        className={styles.customfileupload}
        htmlFor={htmlFor}
      >
        <PlusCircle />
      </label>
    </>
  );
}

export default UploadFile;
