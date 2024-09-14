import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";
import AgentModal from "./modals/agent/AgentModal";
import { useState } from "react";

function Controls() {
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);

  // Toggler for addAgent modal
  const toggleModal = () => {
    setIsAddAgentModalOpen(!isAddAgentModalOpen);
  };

  return (
    <>
      <div className={styles.controls}>
        <Filters />
        <div className={styles.buttons}>
          <AddListingButton />
          <AddAgentButton onClick={toggleModal} />
        </div>
        {isAddAgentModalOpen && <AgentModal onClose={toggleModal} />}
      </div>
    </>
  );
}

export default Controls;
