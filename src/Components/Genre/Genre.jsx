import React, { Fragment, useEffect, useState } from "react";
import "./Genre.css";
import axios from "../../Axios";
import { imageUrl } from "../../Constants/Constants";
import { useNavigate } from "react-router";

function Genre(props) {

  const [genre,setGenre] = useState([])
  const Navigate =useNavigate()

  useEffect(() => {
    axios
      .get(props.genreUrl)
      .then((res) => {
        console.log(res.data.results);
        setGenre(res.data.results);
      })
      .catch((err) => console.log("error genre"));
  },[]);


  return (
    <Fragment>
      <div className="genre-wpr p-3 ps-16 flex flex-wrap gap-3">
        {genre.map((movie) => {
          return (
            <div className="genre pb-2">
              <img
                onClick={()=>Navigate(`/${movie.id}`)}
                src={movie ? imageUrl + movie.backdrop_path : null}
                alt="data not found"
              />
              <p className="text-lg uppercase font-medium text-center block">
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
