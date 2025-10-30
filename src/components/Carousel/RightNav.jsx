import styles from "./Carousel.module.css";import right from "../../assets/chevron-right.svg";
export default function RightNav({ onClick, disabled }){ if(disabled) return null; return (<button className={`${styles.nav} ${styles.right}`} onClick={onClick} aria-label="Next"><img src={right} alt=""/></button>); }
