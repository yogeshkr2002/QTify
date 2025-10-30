import PropTypes from "prop-types";
import styles from "./AlbumCard.module.css";import Chip from "@mui/material/Chip";
export default function AlbumCard({ image, title, metric="follows", count=0 }){
  const label = `${count} ${metric === "likes" ? "Likes" : "Follows"}`;
  return (<article className={styles.card} role="listitem">
    <div className={styles.media}><img src={image} alt={title} className={styles.img}/>
      <div className={styles.overlay}><Chip size="small" label={label} className={styles.chip}/></div></div>
    <div className={styles.footer} title={title}>{title}</div></article>);
}
AlbumCard.propTypes = { image:PropTypes.string.isRequired,title:PropTypes.string.isRequired,metric:PropTypes.oneOf(["follows","likes"]),count:PropTypes.number };
