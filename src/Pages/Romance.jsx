import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx";
import Genre from "../Components/Genre/Genre.jsx";
import { romance } from "../MovieUrl.js";

function Romance() {
  return (
    <>
      <Navbar />
      <Genre genreUrl={romance} />
    </>
  );
}

export default Romance