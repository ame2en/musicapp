import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {
    DetailsHeader,Error,Loader,RelatedSongs
} from "../components";
import { useGetSongDetailsQuery, useGetTopChartsQuery } from "../redux/services/shazamCore";

import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useEffect,useState } from "react";

const SongDetails = () => {

    
    
    // console.log(songdata);


    const dispatch  = useDispatch();
    const {songid} = useParams();
    const {activeSong,isPlaying } = useSelector((state)=>state.player);
    const { data:songdata,isFetching:isFetchingsong,error:iserrorsong} = useGetSongDetailsQuery({songid})
    const {data:wholedata} = useGetTopChartsQuery();

    
    

    const [text, setText] = useState(null);

    useEffect(() => {
        if (songdata && songdata.resources && songdata.resources.lyrics) {
            const dynamickeys = Object.keys(songdata.resources.lyrics);
            if (dynamickeys.length > 0) {
                const dynamickey = dynamickeys[0];
                const lyricsText = songdata.resources.lyrics[dynamickey].attributes?.text;
                setText(lyricsText);
            }
        }


        // console.log(text);
    }, [songdata]);


    if (isFetchingsong) return <div><Loader /></div>;
    if (iserrorsong) return <div><Error /></div>;
    
    return ( 
        <div className="flex flex-col">
            <DetailsHeader />


            <div className=" mb-10">
                <h2 className=" text-white font-bold text-3xl">
                    Lyrics:
                </h2>

                <div className="mt-5">
                    { text===null ?
                        <p className="text-gray-300 text-base my-1 ">Sorry no lyrics found</p>
                        : 
                        text.map((line,i)=>{
                            return (<p className="text-gray-500 text-base my-1 ">{line}</p>);
                        })
                    }
                </div>

            </div>

        </div>
    );
    
}

export default SongDetails;
