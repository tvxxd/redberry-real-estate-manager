import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";

function Controls() {
  return (
    <>
      <div className={styles.controls}>
        <Filters />
        <div className={styles.buttons}>
          <AddListingButton />
          <AddAgentButton />
        </div>
      </div>
    </>
  );
}

export default Controls;
