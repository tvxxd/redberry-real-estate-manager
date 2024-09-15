import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";
import AgentModal from "./modals/agent/AgentModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Controls() {
  const navigate = useNavigate();
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);

  // Toggler for addAgent modal
  const toggleModal = () => {
    setIsAddAgentModalOpen(!isAddAgentModalOpen);
  };

  const handleClick = () => {
    navigate("/add-listing");
  };

  return (
    <>
      <div className={styles.controls}>
        <Filters />
        <div className={styles.buttons}>
          <AddListingButton onClick={handleClick} />
          <AddAgentButton onClick={toggleModal} />
        </div>
        {isAddAgentModalOpen && <AgentModal onClose={toggleModal} />}
      </div>
    </>
  );
}

export default Controls;
