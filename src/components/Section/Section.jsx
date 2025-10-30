import PropTypes from "prop-types";import { useEffect,useMemo,useState } from "react";
import styles from "./Section.module.css";import { getJSON } from "../../lib/api";import AlbumCard from "../Card/AlbumCard";import Carousel from "../Carousel/Carousel";
export default function Section({ title, endpoint, metric="follows", showToggle=false, mode }){
  const [items,setItems]=useState([]);const [error,setError]=useState("");const [loading,setLoading]=useState(true);const [expanded,setExpanded]=useState(false);
  const isCarouselOnly=mode==="carousel-only";
  useEffect(()=>{let alive=true;(async()=>{try{const data=await getJSON(endpoint);if(alive) setItems(data||[]);}catch(e){if(alive) setError("Failed to load");}finally{if(alive) setLoading(false);}})();return()=>{alive=false;};},[endpoint]);
  const content=useMemo(()=>{if(loading) return <div className={styles.state}>Loading…</div>;if(error) return <div className={styles.state}>{error}</div>;if(!items.length) return <div className={styles.state}>No items</div>;
    if(!isCarouselOnly && !expanded){return(<div className={styles.grid} role="list">{items.map(a=>(<AlbumCard key={a.id} image={a.image} title={a.title} count={metric==="likes"?a.likes:a.follows} metric={metric}/>))}</div>);}
    return(<Carousel items={items} renderItem={(a)=>(<AlbumCard image={a.image} title={a.title} count={metric==="likes"?a.likes:a.follows} metric={metric}/>)} />);},[items,loading,error,expanded,isCarouselOnly,metric]);
  return(<section className={styles.section}><div className={styles.head}><h2 className={styles.title}>{title}</h2>{!isCarouselOnly&&showToggle&&(<button className={styles.toggle} onClick={()=>setExpanded(!expanded)}>{expanded?"Collapse":"Show all"}</button>)}</div>{content}</section>);
}
Section.propTypes={title:PropTypes.string.isRequired,endpoint:PropTypes.string.isRequired,showToggle:PropTypes.bool,metric:PropTypes.oneOf(["follows","likes"]),mode:PropTypes.oneOf(["carousel-only"])};
