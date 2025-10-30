import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";import Search from "../Search/Search";import Button from "../Button/Button";
export default function Navbar(){
  return (<header className={styles.bar}><Logo /><Search /><Button>Give Feedback</Button></header>);
}
