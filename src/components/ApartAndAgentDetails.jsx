import { formatPrice, formatPrice2 } from "../utils/formatPrice";
import Location from "../icons/Location";
import Area from "../icons/Area";
import Bed from "../icons/Bed";
import Code from "../icons/Code";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import CancelButton from "../components/CancelButton";
import styles from "./ApartAndAgentDetails.module.css";
import { useState } from "react";
import DeleteListingModal from "./modals/DeleteListingModal";

function ApartAndAgentDetails({ listing }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  function handleDeleteListing() {}
  return (
    <div className={styles.secondColumn}>
      <div className={styles.apartDetails}>
        <p className={styles.price}>{formatPrice2(listing.price)} ₾</p>
        <div>
          <Location />
          <p>{listing.address}</p>
        </div>
        <div>
          <Area />
          <p>ფართი {listing.area} მ&#178</p>
        </div>
        <div>
          <Bed />
          <p>საძინებელი {listing.bedrooms}</p>
        </div>
        <div>
          <Code />
          <p>საფოსტო ინდექსი {listing.zip_code}</p>
        </div>
      </div>
      <p className={styles.description}>
        იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში, ბინა არის ახალი რემონტით ორი
        საძინებლითა და დიდი აივნებით მოწყობილი ავეჯითა და ტექნიკით
      </p>
      <div className={styles.aboutAgent}>
        <div className={styles.agentFirstRow}>
          <img
            className={styles.agentImg}
            src="https://media-cdn.tripadvisor.com/media/photo-s/19/9c/93/21/random-pics.jpg"
            alt=""
          />
          <div>
            <p className={styles.agentName}>სოფიო გელოვანი</p>
            <p className={styles.agent}>აგენტი</p>
          </div>
        </div>
        <div className={styles.agentSecondRow}>
          <div>
            <Mail />
            <p>sophio.gelovani@redberry.ge</p>
          </div>
          <div>
            <Phone />
            {/* can also be used for a phone number, since we format in this way: 500 000 000*/}
            <p>{formatPrice(577777777)}</p>
          </div>
        </div>
      </div>
      <div>
        <CancelButton
          text="ლისტინგის წაშლა"
          color="#676E76"
          padding="10px 10px"
          border="1px solid #676E76"
          hover="yes"
          onClick={toggleModal}
        />
      </div>
      {isModalOpen && <DeleteListingModal onClose={toggleModal} />}
    </div>
  );
}

export default ApartAndAgentDetails;
