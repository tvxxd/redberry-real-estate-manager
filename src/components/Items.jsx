import styles from "./Items.module.css";
import Item from "./Item";
import { useState } from "react";
// import items from "../assets/items.json";

/**
 * Items component displays a list of Item components.
 * @returns jsx - rendered items component
 */
function Items({ items }) {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default Items;
