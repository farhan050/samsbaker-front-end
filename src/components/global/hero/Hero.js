import React from 'react'
import Header from '../header/Header'

function Hero({children}) {
  return (
    <div className="hero_area">
        <Header/>
        {children}
    </div>
  )
}

export default Hero
