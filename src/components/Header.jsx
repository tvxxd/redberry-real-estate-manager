import logo from "../assets/LOGO.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="REDBERRY LOGO" />
    </div>
  );
}

export default Header;
