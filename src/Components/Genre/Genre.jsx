import React, { Fragment, useEffect, useState } from "react";
import "./Genre.css";
import axios from "../../Axios";
import { imageUrl } from "../../Constants/Constants";

function Genre(props) {

  const [genre,setGenre] = useState([])

  useEffect(() => {
    axios
      .get(props.genreUrl)
      .then((res) => {
        // console.log(res.data.results);
        setGenre(res.data.results);
      })
      .catch((err) => console.log("error genre"));
  }, []);


  return (
    <fragment>
      <div className="genre-wpr p-3 flex flex-wrap gap-3">
        {genre.map((movie) => {
          return (
            <div className="genre pb-2">
              <img
                src={movie ? imageUrl+movie.backdrop_path : null }
                alt="data not found"
              />
              <span className="text-lg uppercase font-medium text-center block">
                {movie.name || movie.title}
              </span>
            </div>
          );
        })}
      </div>
    </fragment>
  );
}

export default Genre;
