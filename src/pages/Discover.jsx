import { Error,SongCard,Loader } from "../components";
import {genres} from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch,useSelector } from "react-redux";

const Discover = () =>{ 

    const dispatch = useDispatch();

    const {activeSong,isPlaying} = useSelector((state)=>{return state.player;})

    const {data,isFetching,error} =useGetTopChartsQuery();

    

    const genreTitle = "Pop";
    console.log(data);

    if(isFetching){
        return (
            <Loader title="Loading Songs...."/>
        );
    }
    if(error){
        return (
            <Error />
        );
    }
    
    return (
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className=" font-bold text-3xl text-left text-white">Discover {genreTitle}</h2>
                <select 
                onChange={()=>{}}
                name="" 
                id=""
                className=" bg-black text-gray-300 p-3 outline-none rounded-lg text-sm sm:mt-0 mt-5 "
                >
                    {genres.map((genre,i)=>{
                        return(
                            <option key={genre.value} value={genre.value}>{genre.title}</option>
                        ); 
                    })}
                </select>
            </div>

            <div className=" flex flex-wrap sm:justify-start justify-center gap-8 ">
                    {data.map((song,i)=>{
                        return (
                            <SongCard key={song.key} 
                                song={song}
                                i={i}
                                activeSong={activeSong}
                                isPlaying={isPlaying}
                                data={data}
                            />
                        )
                    })}

            </div>
            

        </div>
    );
};


export default Discover;
