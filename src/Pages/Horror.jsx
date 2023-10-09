import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx";
import Genre from "../Components/Genre/Genre.jsx";
import { horror } from "../MovieUrl.js";

function Horror() {
  return (
    <>
      <Navbar />
      <Genre genreUrl={horror} />
    </>
  );
}

export default Horror