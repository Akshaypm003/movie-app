import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <section className="banner-wpr">
        <div className="content">
          <h1 className="title">Title 1</h1>
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

      <section className="banner-wpr2">
        <div className="content">
          <h1 className="title">Title 1</h1>
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
    </div>
  );
}

export default Banner