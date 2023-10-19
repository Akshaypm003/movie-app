import React, { useContext, useEffect, useState } from "react";
import "./Trailer.css";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import { API_KEY } from "../../Constants/Constants";
import axios from "../../Axios.js";
import { AppContext } from "../../context";

function Trailer() {
  const { ID } = useParams();
  const [urlKey, setUrlKey] = useState("");
  // const [movie,setMovie] = useState({})
  const [movieDetails] = useContext(AppContext);
  const movie = movieDetails;

  const extractKey = (res) => {
    res.data && res.data.results.length !== 0
      ? setUrlKey(res.data.results[0].key)
      : console.log("Empty array");
    // console.log(res.data.results);
    // console.log(movie);
  };

  useEffect(() => {
    axios
      .get(`/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => extractKey(res))
      .catch((err) => console.log("nodata found"));
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="trailer flex justify-center bg-neutral-900">
      {movie.id && (
        <div className="h-[92vh] w-[35%] p-2">
          <div className="h-full flex flex-col justify-center  text-slate-100 px-3 py-10 ">
            <h1 className="text-2xl text-center uppercase font-bold">
              {movie.title || movie.name}
            </h1>
            <p className="text-xl text-left py-6 italic">{movie.overview}</p>
            <span className="text-xl text-left">{`Release Date:${movie.release_date}`}</span>
          </div>
        </div>
      )}
      <YouTube
        className="h-[92vh] w-[65%] bg-slate-400 "
        videoId={urlKey}
        opts={opts}
      />
    </div>
  );
}

export default Trailer;
//
