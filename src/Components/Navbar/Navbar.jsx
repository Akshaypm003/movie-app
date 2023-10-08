import React from 'react'
import './Navbar.css'

function Navbar() {

  const genreItem = "ps-2 text-base font-medium tracking-tight"; 

  return (
    

      <div className="navbar flex p-1 justify-between align-middle bg-neutral-900 text-white">
        <h2 className="ps-3 text-2xl font-black tracking-widest ">NOVA.</h2>
        <div className="genre pe-5 my-auto ">
          <span className={genreItem}>COMEDY</span>
          <span className={genreItem}>ACTION</span>
          <span className={genreItem}>THRILLER</span>
          <span className={genreItem}>ROMANCE</span>
        </div>
      </div>
    
  );
}

export default Navbar