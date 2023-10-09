import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx";
import Genre from "../Components/Genre/Genre.jsx";
import { action } from "../MovieUrl.js";

function Action() {
  return (
    <>
      <Navbar />
      <Genre genreUrl={action} />
    </>
  );
}

export default Action