import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
const SongCard = ({song,i,activeSong,isPlaying,data}) => {

  const dispatch = useDispatch();


  const handlePauseClick = ()=>{
    dispatch(playPause(false));
  }

  const handlePlayclick = ()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }

  

  return (
    <div className=" flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ">
        <div className=" relative w-full h-56 group">
          <div className={` absolute rounded-lg inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
          ${activeSong?.attributes?.name === song.attributes.name ? 'flex bg-black bg-opa-70 ': 'hidden'}`}>
            <PlayPause 
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause = {handlePauseClick}
              handlePlay = {handlePlayclick}
            />
          </div>
          <img src={song.attributes.artwork.url} alt="song_img" />
        </div>

        <div className="flex mt-4 flex-col">
          <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song?.key}`}>
              {song.attributes.name}
            </Link>
          </p> 
          <p className=" font-semibold text-sm text-gray-300 mt-1  truncate">
            <Link to={song.artists ? `/artists/${song?.relationships.artists.href}` : `/top-artists`}>
              {song.attributes.artistName}
            </Link>
          </p> 

        </div>
    </div> 
  );
};

export default SongCard;
