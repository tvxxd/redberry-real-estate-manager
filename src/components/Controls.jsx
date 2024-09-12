import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";

function Controls({ regions }) {
  return (
    <>
      <div className={styles.controls}>
        <Filters regions={regions} />
        <div className={styles.buttons}>
          <AddListingButton />
          <AddAgentButton />
        </div>
      </div>
    </>
  );
}

export default Controls;
