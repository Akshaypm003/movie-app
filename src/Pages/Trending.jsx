import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx";
import Genre from "../Components/Genre/Genre.jsx";
import { trending } from "../MovieUrl.js";

function Trending() {
  return (
    <>
      <Navbar />
      <Genre genreUrl={trending} />
    </>
  );
}

export default Trending