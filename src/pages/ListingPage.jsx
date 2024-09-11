import Header from "../components/Header";
import Controls from "../components/Controls";
import Items from "../components/Items";
import { useEffect, useState } from "react";

// https://api.real-estate-manager.redberryinternship.ge/generate-token
// https://api.real-estate-manager.redberryinternship.ge/swagger
const API_KEY = "9cfc18f5-4b59-4d0d-94d7-c06ab5b1c807";

function ListingPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await fetch(
          "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("response not ok");
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchListings();
  }, []);

  return (
    <>
      <Header />
      <Controls />
      <Items items={listings} />
    </>
  );
}

export default ListingPage;
