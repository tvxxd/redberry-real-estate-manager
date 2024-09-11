import styles from "./Items.module.css";
import Item from "./Item";
function Items() {
  return (
    <div className={styles.items}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Items;
