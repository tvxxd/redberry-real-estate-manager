import styles from "./Items.module.css";
import Item from "./Item";
// import items from "../assets/items.json";

/**
 * Items component displays a list of Item components.
 * @returns jsx - rendered items component
 */
function Items({ items }) {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
