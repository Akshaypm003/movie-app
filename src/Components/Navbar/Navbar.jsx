import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {

  const genreItem = "ps-5 text-base font-medium tracking-tight"; 
  const navigate = useNavigate();

  return (
    <div className="navbar flex p-1 justify-between align-middle bg-neutral-900 text-white">
      <h2
        onClick={() => navigate("/")}
        className="ps-8 my-auto text-2xl font-black tracking-widest "
      >
        NOVA.
      </h2>
      <div className="nav-genre pe-10 my-auto ">
        <span onClick={() => navigate("/trending")} className={genreItem}>
          TRENDING
        </span>
        <span onClick={() => navigate("/comedy")} className={genreItem}>
          COMEDY
        </span>
        <span onClick={() => navigate("/action")} className={genreItem}>
          ACTION
        </span>
        <span onClick={() => navigate("/horror")} className={genreItem}>
          HORROR
        </span>
        <span onClick={() => navigate("/romance")} className={genreItem}>
          ROMANCE
        </span>
      </div>
    </div>
  );
}

export default Navbar

