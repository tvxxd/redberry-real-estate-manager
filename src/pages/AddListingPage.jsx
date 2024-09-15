import DealType from "../components/DealType";
import Location from "../components/Location";
import styles from "./AddListingPage.module.css";
import Header from "../components/Header";
import ApartmentDetails from "../components/ApartmentDetails";
import ChooseAgent from "../components/ChooseAgent";
import SelectButton from "../components/SelectButton";
import CancelButton from "../components/CancelButton";
import { useNavigate } from "react-router-dom";

function AddListingPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.page}>
        <p className={styles.p}>ლისტინგის დამატება</p>
        <DealType />
        <Location />
        <ApartmentDetails />
        <ChooseAgent />
        <div className={styles.buttons}>
          <CancelButton onClick={handleClick} />
          <SelectButton text="დაამატე ლისტინგი" />
        </div>
      </div>
    </>
  );
}

export default AddListingPage;
