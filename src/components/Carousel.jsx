import Right from "../icons/Right";
import Left from "../icons/Left";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";

function Carousel() {
  const { listings } = useContext(ListingsContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };

  return (
    <div style={{ marginTop: "3.3125rem" }}>
      <p
        style={{
          marginBottom: "3.3125rem",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        ბინები მსგავს ლოკაციაზე
      </p>
      <Slider {...settings}>
        {listings.map((listing) => (
          <Item item={listing} key={listing.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
