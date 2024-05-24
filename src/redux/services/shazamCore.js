import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

  
export const ShazamCoreApi = createApi({
reducerPath: "shazamCoreApi",
baseQuery: fetchBaseQuery({
    baseUrl:"https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers)=>{
        headers.set("X-RapidAPI-Key","9d26178473msh361c3e85b2b737fp1ccd85jsn394ca8eaec78");
        headers.set("X-RapidAPI-Host",'shazam-core.p.rapidapi.com');
        return headers;
    },

    
    
}),
endpoints: (builder)=>({
    getTopCharts : builder.query({query:()=>  '/charts/world?country_code=IN'}),
})
});

export const {
    useGetTopChartsQuery
} = ShazamCoreApi; 