import styles from "./Filters.module.css";
import Shape from "../icons/Shape.jsx";
import RegionModal from "./modals/RegionModal.jsx";
import PriceModal from "./modals/PriceModal.jsx";
import { useContext, useState } from "react";
import AreaModal from "./modals/AreaModal.jsx";
import RoomModal from "./modals/RoomModal.jsx";
import { RegionsContext } from "../context/RegionsContext.jsx";

function Filters() {
  const { regions } = useContext(RegionsContext);
  /**
   * state for each filter modal
   */
  const [isModalOpen, setIsModalOpen] = useState({
    region: false,
    price: false,
    area: false,
    bedrooms: false,
  });

  /**
   * selects modal for specific filter
   * close all modals except the one that should be opened
   * @param modalName name of modal
   * @returns new state
   */
  const toggleModal = (modalName) => {
    setIsModalOpen((prevState) => {
      const newState = {
        region: false,
        price: false,
        area: false,
        bedrooms: false,
      };
      newState[modalName] = !prevState[modalName];
      return newState;
    });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.regions}>
        <span>რეგიონი</span>
        <button onClick={() => toggleModal("region")} className={styles.btn}>
          <Shape />
        </button>
        {isModalOpen.region && <RegionModal regions={regions} />}
      </div>
      <div className={styles.price}>
        <span>საფასო კატეგორია</span>
        <button onClick={() => toggleModal("price")} className={styles.btn}>
          <Shape />
        </button>
        {isModalOpen.price && <PriceModal />}
      </div>
      <div className={styles.area}>
        <span>ფართობი</span>
        <button onClick={() => toggleModal("area")} className={styles.btn}>
          <Shape />
        </button>
        {isModalOpen.area && <AreaModal />}
      </div>
      <div className={styles.rooms}>
        <span>საძინებლების რაოდენობა</span>
        <button onClick={() => toggleModal("bedrooms")} className={styles.btn}>
          <Shape />
        </button>
        {isModalOpen.bedrooms && <RoomModal />}
      </div>
    </div>
  );
}

export default Filters;
