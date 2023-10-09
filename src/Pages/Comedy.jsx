import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Genre from '../Components/Genre/Genre.jsx'
import { comedy } from '../MovieUrl.js'


function Comedy() {
    
  return (
    <Fragment>
        <Navbar/>
        <Genre genreUrl={comedy}/>
    </Fragment>
  )
}

export default Comedy