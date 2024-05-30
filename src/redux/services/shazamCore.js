import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

  
export const ShazamCoreApi = createApi({
reducerPath: "shazamCoreApi",
baseQuery: fetchBaseQuery({
    baseUrl:"https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers)=>{
        headers.set("X-RapidAPI-Key","9d26178473msh361c3e85b2b737fp1ccd85jsn394ca8eaec78");
        headers.set("X-RapidAPI-Host",'shazam-core.p.rapidapi.com');
        return headers;
    },

    
    
}),
endpoints: (builder)=>({
    getTopCharts : builder.query({query:()=>  '/v1/charts/world?country_code=IN'}),
    getSongDetails : builder.query({query:({songid})=>  `/v2/tracks/details?track_id=${songid}`}),
    getArtistDetails: builder.query({query:({artistid})=>  `v2/artists/details?artist_id=${artistid}`}),
    
})
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery
} = ShazamCoreApi; 