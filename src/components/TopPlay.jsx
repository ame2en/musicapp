import { useEffect,useRef,useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Swiper,SwiperSlide } from "swiper/react";
import {FreeMode} from "swiper";
import axios from "axios";

import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

import { useMediaQuery } from "react-responsive";



const TopPlay = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divref = useRef(null);

  const topPlays = data?.slice(0, 5);

//   const [artists, setArtists] = useState([]);
//   useEffect(() => {
//     const fetchArtistDetails = async () => {
//       try {
//         const artistDetails = [];
//         for (const song of topPlays) {
//           const artistId = song?.relationships?.artists?.data[0]?.id;
//           if (artistId) {
//             const response = await axios.get(
//               `https://shazam-core.p.rapidapi.com/v2/artists/details`,
//               {
//                 params: { artist_id: artistId },
//                 headers: {
//                   "X-RapidAPI-Key": "9d26178473msh361c3e85b2b737fp1ccd85jsn394ca8eaec78",
//                   "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//                 },
//               }
//             );
//             artistDetails.push(response.data.data[0].avatar);
//             await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
//           }
//         }
//         setArtists(artistDetails);
//       } catch (err) {
//         console.log("Failed to fetch artist details");
//       }
//     };

//     if (topPlays?.length) {
//       fetchArtistDetails();
//     }
//   }, [topPlays]);

// console.log(artists);

  const handlePauseClick = ()=>{
    dispatch(playPause(false));
  }

  const handlePlayclick = (song,i)=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }


  return (
    <div  ref={divref} className=" xl:ml-6 ml-0 mb-6 flex-1 xl:max-w-[500px] w-[300px] flex flex-col  ">
      <div className=" w-full flex flex-col">
        <div className=" flex flex-row items-center justify-between">
          <h2 className=" font-bold text-white text-2xl ">
            Top Charts
          </h2>
          <Link to="/top-charts" >
            <p className=" text-gray-300 text-base cursor-pointer ">See more</p>
          </Link>
        </div>


        <div className=" flex flex-col mt-4 gap-1">
          {topPlays?.map((song,i)=>{
            return(
              
            <TopChartCard 
            key={song.id}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayclick = {()=>{handlePlayclick(song,i)}}
            ></TopChartCard>
            );
          })}
        </div>
      </div>

      {/* <div className="w-full flex flex-col mt-8">
        <div className=" flex flex-row items-center justify-between">
          <h2 className=" font-bold text-white text-2xl ">
            Top Artists
          </h2>
          <Link to="/top-artists" >
            <p className=" text-gray-300 text-base cursor-pointer ">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="m-4 custom-swiper"
          // style={{ overflowX: 'auto' }}
        >
          {topPlays.map((song,i)=>{
            return <SwiperSlide
            key={song?.id}
            style={{width:'25%',height:'auto'}}
            className=" shadow-lg rounded-full animate-slideright "
            >
              <Link to={`/artists/${song?.relationships?.artists?.data[0]?.href}`}>
                <img src={artists[i]} alt="" 
                className=" rounded-full w-full object-cover"/>
              </Link>

            </SwiperSlide>;
          })}
        </Swiper>

      </div> */}


    
    </div>
  )
}

const TopChartCard = ({song,i,isPlaying,activeSong,handlePauseClick,handlePlayclick})=>{
  return (
    <div className=" w-full  flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">{i+1}</h3>
      <div className=" flex-1 flex flex-row justify-between items-center">
        <img src={song?.attributes.artwork.url} alt="" 
        className="w-12 h-12 rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-center mx-3 text-white md:w-[80px]">
          <p className="  font-semibold text-white md:truncate">{song?.attributes.name}</p>
          <p className="text-sm  text-white md:truncate">{song?.attributes.artistName}</p>
        </div>

      </div>
      <PlayPause isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayclick}
      ></PlayPause>
    </div>
  )
}


export default TopPlay
