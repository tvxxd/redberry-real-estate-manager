import styles from "./Filters.module.css";
import Shape from "../icons/Shape.jsx";
import RegionModal from "./modals/RegionModal.jsx";
import PriceModal from "./modals/PriceModal.jsx";
import { useState } from "react";

function Filters({
  regions,
  selectedRegion,
  onRegionSelect,
  priceRange,
  setPriceRange,
  areaRange,
  setAreaRange,
  bedrooms,
  setBedrooms,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.filters}>
      <div className={styles.regions}>
        <span>რეგიონი</span>
        <button
          onClick={() =>
            isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
          }
          className={styles.btn}
        >
          <Shape />
        </button>
        {isModalOpen && <RegionModal regions={regions} />}
      </div>
      <div className={styles.price}>
        <span>საფასო კატეგორია</span>
        <button
          onClick={() =>
            isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
          }
          className={styles.btn}
        >
          <Shape />
        </button>
        {isModalOpen && <PriceModal />}
      </div>
      <div className={styles.area}>
        <span>ფართობი</span>
        <Shape />
      </div>
      <div className={styles.rooms}>
        <span>საძინებლების რაოდენობა</span>
        <Shape />
      </div>
    </div>
  );
}

export default Filters;
