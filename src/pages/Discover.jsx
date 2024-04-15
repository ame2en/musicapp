import { Error,SongCard,Loader } from "../components";
import {genres} from "../assets/constants"

const Discover = () =>{ 
    const genreTitle = "Pop";
    console.log(genres);
    
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
                            <option key={i} value={genre.value}>{genre.title}</option>
                        ); 
                    })}
                </select>
            </div>

            <div className=" flex flex-wrap sm:justify-start justify-center gap-8 ">
                    {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>{
                        return (
                            <SongCard key={song.key} 
                                song={song}
                                i={i}
                            />
                        )
                    })}

            </div>
            

        </div>
    );
};


export default Discover;
