import { useEffect,useMemo,useState } from "react";import styles from "./Songs.module.css";
import { getJSON } from "../../lib/api";import Carousel from "../Carousel/Carousel";import AlbumCard from "../Card/AlbumCard";
import Tabs from "@mui/material/Tabs";import Tab from "@mui/material/Tab";
export default function Songs(){
  const [songs,setSongs]=useState([]);const [genres,setGenres]=useState([]);const [tab,setTab]=useState("all");const [loading,setLoading]=useState(true);
  useEffect(()=>{let alive=true;(async()=>{const [gs,ss]=await Promise.all([getJSON("/genres"),getJSON("/songs")]);if(!alive) return;setGenres([{key:"all",label:"All"},...(gs?.data||[])]);setSongs(ss||[]);setLoading(false);})();return()=>{alive=false;};},[]);
  const filtered=useMemo(()=>{if(tab==="all") return songs;return songs.filter(s=>s.genre?.key?.toLowerCase()===tab);},[tab,songs]);
  return(<section className={styles.wrap}><div className={styles.head}><h2 className={styles.title}>Songs</h2></div>
    <div className={styles.tabsRow}><Tabs value={tab} onChange={(_,v)=>setTab(v)} TabIndicatorProps={{style:{backgroundColor:"var(--qt-green)"}}} className={styles.tabs}>
      {genres.map(g=>(<Tab key={g.key} value={g.key.toLowerCase()} label={g.label} className={styles.tab}/>))}
    </Tabs></div>
    {loading?(<div className={styles.state}>Loading…</div>):(<Carousel items={filtered} renderItem={(s)=>(<AlbumCard image={s.image} title={s.title} count={s.likes} metric="likes"/>)}/>)}
  </section>);
}
