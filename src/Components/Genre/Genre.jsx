import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Genre.css";
import axios from "../../Axios";
import { imageUrl } from "../../Constants/Constants";
import { useNavigate } from "react-router";
import { AppContext } from "../../context";

function Genre(props) {

  const [genre,setGenre] = useState([])
  const Navigate =useNavigate()
  const [, setMovieDetails] = useContext(AppContext)

  useEffect(() => {
    axios
      .get(props.genreUrl)
      .then((res) => {
        // console.log(res.data.results);
        setGenre(res.data.results);
      })
      .catch((err) => console.log("error genre"));
  },[]);


  const hdlMovieDetails = (movie)=>{
    Navigate(`/${movie.id}`);
    setMovieDetails(movie);
  }

  return (
    <Fragment>
      <div className="genre-wpr py-5 px-8 justify-evenly flex flex-wrap text-slate-100 bg-neutral-900">
        {genre.map((movie) => {
          return (
            <div className="genre mb-8 border border-neutral-800 rounded-sm p-1">
              <img
                onClick={() => hdlMovieDetails(movie)}
                src={movie ? imageUrl + movie.backdrop_path : null}
                alt="data not found"
                className="w-full"
              />
              <p className="text-lg uppercase font-medium text-center block mx-5 py-4 my-auto overflow-x-hidden">
                {movie.name || movie.title}
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Genre;
