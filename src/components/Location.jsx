import Input from "./modals/Input";
import Checkmark from "../icons/Checkmark";
import styles from "./Location.module.css";
import { useContext, useState } from "react";
import { RegionsContext } from "../context/RegionsContext";

function Location() {
  const { regions, cities } = useContext(RegionsContext);

  const [selectedRegion, setSelectedRegion] = useState("");
  const filteredCities = cities.filter(
    (city) => city.region_id === Number(selectedRegion)
  );

  return (
    <div>
      <span className={styles.span} style={{ fontWeight: "bold" }}>
        მდებარეობა
      </span>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "1.5rem",
          gridColumnGap: "1.5rem",
          marginTop: "1.375rem",
        }}
      >
        <div>
          <label className={styles.label} htmlFor="loc">
            მისამართი <span className={styles.required}>*</span>
          </label>
          <Input />
          <span>
            <Checkmark /> მინიმუმ ორი სიმბოლო
          </span>
        </div>
        <div>
          <label className={styles.label} htmlFor="postal">
            საფოსტო ინდექსი <span className={styles.required}>*</span>
          </label>
          <Input />
          <span>
            <Checkmark /> მხოლოდ რიცხვები
          </span>
        </div>
        <div>
          <label
            className={styles.label}
            style={{ display: "block" }}
            htmlFor="region"
          >
            რეგიონი
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #808A93",
              borderRadius: "6px",
              outline: "none",
              padding: "10px 14px",
            }}
          >
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className={styles.label}
            style={{ display: "block" }}
            htmlFor="city"
          >
            ქალაქი
          </label>
          <select
            id="city"
            style={{
              width: "100%",
              border: "1px solid #808A93",
              borderRadius: "6px",
              outline: "none",
              padding: "10px 14px",
            }}
          >
            {filteredCities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Location;
