import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";
export default function Hero(){
  return (<section className={styles.hero}>
    <div className={styles.copy}><h1>100 Thousand Songs, ad-free</h1><p>Over thousands podcast episodes</p></div>
    <img src={headphones} alt="" className={styles.art}/>
  </section>);
}
