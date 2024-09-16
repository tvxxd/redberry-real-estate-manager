import ItemDetails from "../components/ItemDetails";
import Carousel from "../components/Carousel";
import Left from "../icons/Left";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";

function ListingDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { listings } = useContext(ListingsContext);

  const listing = listings.find((listing) => listing.id === parseInt(id));

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Left onClick={handleClick} />
      {listing ? (
        <>
          <ItemDetails listing={listing} />
          <Carousel listing={listing} />
        </>
      ) : (
        <p style={{ marginTop: "15px" }}>განცხადება ვერ მოიძებნა</p>
      )}
    </div>
  );
}

export default ListingDetailsPage;
