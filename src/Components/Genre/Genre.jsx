import React, { Fragment, useEffect, useState } from "react";
import "./Comedy.css";
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

  // const c = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Fragment>
      <div className="comedy-wpr p-3 flex flex-wrap justify-around">
        {genre.map((movie) => {
          return (
            <div className="comedy pb-2">
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
    </Fragment>
  );
}

export default Genre;
