import Input from "./modals/Input";
import Checkmark from "../icons/Checkmark";
import styles from "./Location.module.css";
import { useContext } from "react";
import { RegionsContext } from "../context/RegionsContext";

function Location({ value, onChange }) {
  const { regions, cities } = useContext(RegionsContext);

  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    onChange("region_id", newRegion);
    onChange("city_id", "");
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    onChange("city_id", newCity);
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    onChange("address", newAddress);
  };

  const handleZipCodeChange = (e) => {
    const newZipCode = e.target.value;
    onChange("zip_code", newZipCode);
  };

  const filteredCities = cities.filter(
    (city) => city.region_id === Number(value.region_id)
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
          <label className={styles.label} htmlFor="address">
            მისამართი <span className={styles.required}>*</span>
          </label>
          <Input
            id="address"
            value={value.address}
            onChange={handleAddressChange}
          />
          <span>
            <Checkmark /> მინიმუმ ორი სიმბოლო
          </span>
        </div>
        <div>
          <label className={styles.label} htmlFor="zip_code">
            საფოსტო ინდექსი <span className={styles.required}>*</span>
          </label>
          <Input
            id="zip_code"
            value={value.zip_code}
            onChange={handleZipCodeChange}
          />
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
            required
            id="region"
            value={value.region_id}
            onChange={handleRegionChange}
            style={{
              width: "100%",
              border: "1px solid #808A93",
              borderRadius: "6px",
              outline: "none",
              padding: "10px 14px",
            }}
          >
            <option value=""></option>
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
            required
            id="city"
            value={value.city_id}
            onChange={handleCityChange}
            style={{
              width: "100%",
              border: "1px solid #808A93",
              borderRadius: "6px",
              outline: "none",
              padding: "10px 14px",
            }}
          >
            <option value=""></option>
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
