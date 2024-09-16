import DealType from "../components/DealType";
import Location from "../components/Location";
import styles from "./AddListingPage.module.css";
import ApartmentDetails from "../components/ApartmentDetails";
import ChooseAgent from "../components/ChooseAgent";
import SelectButton from "../components/SelectButton";
import CancelButton from "../components/CancelButton";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { API_KEY } from "../utils/api";
import { ListingsContext } from "../context/ListingsContext";

function AddListingPage() {
  const [form, setForm] = useState({
    is_rental: 0,
    address: "",
    zip_code: "",
    region_id: "",
    city_id: "",
    price: "",
    area: "",
    bedrooms: "",
    description: "",
    image: "",
    agent_id: "",
  });

  const { updateListings } = useContext(ListingsContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in form) {
      if (form[key] !== null && form[key] !== "") {
        data.append(key, form[key]);
      }
    }

    try {
      const response = await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          body: data,
        }
      );

      if (response.ok) {
        const newListings = await response.json();
        updateListings(newListings, "add");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.page}>
          <p className={styles.p}>ლისტინგის დამატება</p>
          <DealType
            value={form.is_rental}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, is_rental: value }))
            }
          />
          <Location
            value={{ region_id: form.region_id, city_id: form.city_id }}
            onChange={(key, value) =>
              setForm((prev) => ({ ...prev, [key]: value }))
            }
          />
          <ApartmentDetails
            value={{ form }}
            onChange={(key, value) =>
              setForm((prev) => ({ ...prev, [key]: value }))
            }
          />
          <ChooseAgent
            value={form.agent_id}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, agent_id: value }))
            }
          />
          <div className={styles.buttons}>
            <CancelButton onClick={handleClick} />
            <SelectButton type="submit" text="დაამატე ლისტინგი" />
          </div>
        </div>
      </form>
    </>
  );
}

export default AddListingPage;
