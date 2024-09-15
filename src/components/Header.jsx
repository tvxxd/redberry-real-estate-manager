import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className={styles.header}>
      <img
        onClick={handleSubmit}
        style={{ cursor: "pointer" }}
        src={logo}
        alt="REDBERRY LOGO"
      />
    </div>
  );
}

export default Header;
