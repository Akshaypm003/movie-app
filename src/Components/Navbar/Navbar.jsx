import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {
 
  const navigate = useNavigate();

  return (
    <div className="navbar flex p-1 justify-between align-middle bg-neutral-900 text-white">
      <h2
        onClick={() => navigate("/")}
        className="ps-8 my-auto text-2xl font-black tracking-widest "
      >
        NOVA.
      </h2>
      <div className="nav-genre flex flex-wrap pe-10 my-auto ">
        <span onClick={() => navigate("/trending")} className='ps-5 text-base font-medium tracking-tight'>
          TRENDING
        </span>
        <span onClick={() => navigate("/comedy")} className='ps-5 text-base font-medium tracking-tight'>
          COMEDY
        </span>
        <span onClick={() => navigate("/action")} className='ps-5 text-base font-medium tracking-tight'>
          ACTION
        </span>
        <span onClick={() => navigate("/horror")} className='ps-5 text-base font-medium tracking-tight'>
          HORROR
        </span>
        <span onClick={() => navigate("/romance")} className='ps-5 text-base font-medium tracking-tight'>
          ROMANCE
        </span>
      </div>
    </div>
  );
}

export default Navbar

