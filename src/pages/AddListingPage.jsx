import DealType from "../components/DealType";
import Location from "../components/Location";
import styles from "./AddListingPage.module.css";
import Header from "../components/Header";
import ApartmentDetails from "../components/ApartmentDetails";
import ChooseAgent from "../components/ChooseAgent";
import SelectButton from "../components/SelectButton";
import CancelButton from "../components/CancelButton";

function AddListingPage() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <p className={styles.p}>ლისტინგის დამატება</p>
        <DealType />
        <Location />
        <ApartmentDetails />
        <ChooseAgent />
        <div className={styles.buttons}>
          <CancelButton />
          <SelectButton text="დაამატე ლისტინგი" />
        </div>
      </div>
    </>
  );
}

export default AddListingPage;
