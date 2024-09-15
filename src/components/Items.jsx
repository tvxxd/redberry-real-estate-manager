import styles from "./Items.module.css";
import Item from "./Item";
import { useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";
import { useNavigate } from "react-router-dom";

/**
 * Items component displays a list of Item components.
 * @returns jsx - rendered items component
 */

function Items() {
  const { listings } = useContext(ListingsContext);

  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div className={styles.items}>
      {listings.map((item) => (
        <Item
          onClick={() => handleItemClick(item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default Items;
