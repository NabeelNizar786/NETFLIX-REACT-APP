import React from 'react'
import './Banner.css';

function Banner() {
  return (
    <div className='Banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner