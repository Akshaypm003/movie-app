import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {

  const genreItem = "ps-2 text-base font-medium tracking-tight"; 
  const navigate = useNavigate();

  return (
    <div className="navbar flex p-1 justify-between align-middle bg-neutral-900 text-white">
      <h2 className="ps-3 text-2xl font-black tracking-widest ">NOVA.</h2>
      <div className="genre pe-5 my-auto ">
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

