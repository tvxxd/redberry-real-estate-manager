import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";

function Controls() {
  return (
    <>
      <Filters />
      <div className={styles.controls}>
        <AddListingButton />
        <AddAgentButton />
      </div>
    </>
  );
}

export default Controls;
