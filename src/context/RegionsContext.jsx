import React, { createContext, useState, useEffect } from "react";
import { fetchRegions, fetchCities } from "../utils/api";

export const RegionsContext = createContext();

export const RegionsProvider = ({ children }) => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);

  /**
   * Fetch regions and cities
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regionsData, citiesData] = await Promise.all([
          fetchRegions(),
          fetchCities(),
        ]);
        setRegions(regionsData);
        setCities(citiesData);
      } catch (error) {
        console.error("failed to fetch regions or cities", error);
      }
    };
    fetchData();
  }, []);

  return (
    <RegionsContext.Provider value={{ regions, cities }}>
      {children}
    </RegionsContext.Provider>
  );
};
