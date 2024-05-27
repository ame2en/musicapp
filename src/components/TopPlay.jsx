import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Swiper,SwiperSlide } from "swiper/react";
import {FreeMode} from "swiper";

import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {

  useEffect(()=>{
    divref.current.scrollIntoView({behavior:'smooth'});
  });
  
  const dispatch  = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const data = useGetTopChartsQuery();
  const divref = useRef(null);

  const handlePauseClick = ()=>{
    dispatch(playPause(false));
  }

  const handlePlayclick = ()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }


  return (
    <div  ref={divref} >

    
    </div>
  )
}

export default TopPlay
