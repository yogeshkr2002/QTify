import styles from "./Carousel.module.css";import left from "../../assets/chevron-left.svg";
export default function LeftNav({ onClick, disabled }){ if(disabled) return null; return (<button className={`${styles.nav} ${styles.left}`} onClick={onClick} aria-label="Previous"><img src={left} alt=""/></button>); }
