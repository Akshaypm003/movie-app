import React, { useEffect, useState } from "react";
import "./Banner.css";
import { originals } from "../../MovieUrl.js";
import axios from "../../Axios.js";
import { imageUrl } from "../../Constants/Constants";


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(originals).then((res) => {
      console.log(res.data.results);
      setMovie(res.data.results);
    });
  }, []);

  return (
    <div className="banner">
      {movie.map((obj) => {
        return (
          <section
            className="banner-wpr "
            style={{
              backgroundImage: `linear-gradient(180deg, transparent, rgba(37,37,37,0.5), #111), url(${
                obj ? imageUrl+obj.backdrop_path : null
              })`,
            }}
          >
            <div className="content">
              <h1 className="title">{obj.name}</h1>
              <div className="banner-btns">
                <button className="btn">Play</button>
                <button className="btn">My list</button>
              </div>
              <h1 className="description">
                Lorem ipsum is a popular filler text commonly used in graphic
                design, writing, and publishing. It is a mutilated version of a
                Latin text, "Lorem ipsum," which means "there is no meaning.
              </h1>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Banner;
