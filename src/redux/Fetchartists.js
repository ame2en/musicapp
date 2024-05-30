import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setArtists } from '../redux/actions'; // Import your Redux action

const useFetchArtistDetails = (topPlays) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const artistDetails = [];
        for (const song of topPlays) {
          const artistId = song?.relationships?.artists?.data[0]?.id;
          if (artistId) {
            const response = await axios.get(
              `https://shazam-core.p.rapidapi.com/v2/artists/details`,
              {
                params: { artist_id: artistId },
                headers: {
                  "X-RapidAPI-Key": "9d26178473msh361c3e85b2b737fp1ccd85jsn394ca8eaec78",
                  "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
                },
              }
            );
            artistDetails.push(response.data.data[0].avatar);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
          }
        }
        dispatch(setArtists(artistDetails)); // Dispatch Redux action to set artists
      } catch (err) {
        console.log("Failed to fetch artist details");
      }
    };

    if (topPlays?.length) {
      fetchArtistDetails();
    }
  }, [dispatch, topPlays]);

  return null; // You can return any necessary data here if needed
};

export default useFetchArtistDetails;
