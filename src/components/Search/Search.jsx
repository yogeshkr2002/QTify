import styles from "./Search.module.css";
export default function Search({ placeholder="Search a album of your choice" }){
  return (<div className={styles.shell}>
    <input className={styles.input} placeholder={placeholder} />
    <button className={styles.iconBtn} aria-label="Search">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  </div>);
}
