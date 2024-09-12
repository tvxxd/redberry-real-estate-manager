import Filters from "./Filters";
import AddAgentButton from "./AddAgentButton";
import AddListingButton from "./AddListingButton";
import styles from "./Controls.module.css";

function Controls({
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
  return (
    <>
      <div className={styles.controls}>
        <Filters
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionSelect={onRegionSelect}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          areaRange={areaRange}
          setAreaRange={setAreaRange}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
        />
        <div className={styles.buttons}>
          <AddListingButton />
          <AddAgentButton />
        </div>
      </div>
    </>
  );
}

export default Controls;
