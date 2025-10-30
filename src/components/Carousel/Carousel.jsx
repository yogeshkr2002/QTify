import PropTypes from "prop-types";import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";import styles from "./Carousel.module.css";
import LeftNav from "./LeftNav";import RightNav from "./RightNav";
export default function Carousel({ items, renderItem, breakpoints }){
  const swiperRef = useRef(null);const [atStart,setAtStart]=useState(true);const [atEnd,setAtEnd]=useState(false);
  return (<div className={styles.wrap}>
    <LeftNav disabled={atStart} onClick={()=>swiperRef.current?.slidePrev()}/>
    <Swiper onBeforeInit={(s)=>{swiperRef.current=s;}}
      onSlideChange={(s)=>{setAtStart(s.isBeginning);setAtEnd(s.isEnd);}}
      breakpoints={breakpoints||{0:{slidesPerView:1.3,spaceBetween:12},480:{slidesPerView:2.2,spaceBetween:14},768:{slidesPerView:3.2,spaceBetween:16},1024:{slidesPerView:5.2,spaceBetween:18},1280:{slidesPerView:6.2,spaceBetween:18}}}>
      {items.map((it,i)=>(<SwiperSlide key={i}>{renderItem(it)}</SwiperSlide>))}
    </Swiper>
    <RightNav disabled={atEnd} onClick={()=>swiperRef.current?.slideNext()}/>
  </div>);
}
Carousel.propTypes={items:PropTypes.array.isRequired,renderItem:PropTypes.func.isRequired,breakpoints:PropTypes.object};
