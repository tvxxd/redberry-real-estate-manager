import React, { createContext, useState, useEffect } from "react";
import { fetchListings } from "../utils/api";

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);

  /**
   * Fetch listings
   */
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchListings();
      setListings(data);
    };
    fetch();
  }, []);

  const updateListings = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };

  return (
    <ListingsContext.Provider value={{ listings, updateListings }}>
      {children}
    </ListingsContext.Provider>
  );
};
