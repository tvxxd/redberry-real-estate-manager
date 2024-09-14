import styles from "./Items.module.css";
import Item from "./Item";
import { useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";

/**
 * Items component displays a list of Item components.
 * @returns jsx - rendered items component
 */
function Items() {
  const { listings } = useContext(ListingsContext);
  return (
    <div className={styles.items}>
      {listings.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
