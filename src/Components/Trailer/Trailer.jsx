import React, { useEffect, useState } from 'react'
import './Trailer.css'
import { useParams } from 'react-router'
import YouTube from 'react-youtube'
import { API_KEY } from '../../Constants/Constants'
import axios from '../../Axios.js'

function Trailer() {  
    const {ID} = useParams()
    const [urlKey, setUrlKey] = useState("");

    const extractKey = (res) => {
      res.data && res.data.results.length !== 0
        ? setUrlKey(res.data.results[0].key)
        : console.log("Empty array");
    };

    useEffect(()=>{
        axios
          .get(`/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`)
          .then((res) => extractKey(res))
          .catch((err) => console.log("nodata found"));
    },[])
  
    const opts = {
      height: '650',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }
  return (
    <div className='trailer'>
      <YouTube videoId={urlKey} opts={opts} />
    </div>
  );
}

export default Trailer