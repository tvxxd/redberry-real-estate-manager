import DealType from "../components/DealType";
import Location from "../components/Location";
import styles from "./AddListingPage.module.css";
import Header from "../components/Header";
function AddListingPage() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <p className={styles.p}>ლისტინგის დამატება</p>
        <DealType />
        <Location />
      </div>
    </>
  );
}

export default AddListingPage;
