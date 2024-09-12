import Header from "../components/Header";
import Controls from "../components/Controls";
import Items from "../components/Items";
import { useEffect, useState } from "react";
import { fetchRegions, fetchListings } from "../utils/api.js";

// https://api.real-estate-manager.redberryinternship.ge/generate-token
// https://api.real-estate-manager.redberryinternship.ge/swagger

function ListingPage() {
  const [listings, setListings] = useState([]);
  const [regions, setRegions] = useState([]);

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

  /**
   * Fetch regions
   */
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchRegions();
      setRegions(data);
    };
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Controls regions={regions} />
      <Items items={listings} />
    </>
  );
}

export default ListingPage;
