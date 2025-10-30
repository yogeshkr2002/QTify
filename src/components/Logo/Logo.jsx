import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className={styles.wrap} aria-label="QTify">
      <img src={logo} alt="QTify logo" className={styles.img} />
    </div>
  );
}
