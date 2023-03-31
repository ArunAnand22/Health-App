import React from 'react'
import HomeNav from '../../Components/HomeNav/HomeNav'
import './mainHome.css'
import Banner from '../../Components/Banner/Banner'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Aboutdesc from '../../Components/AboutDesc/Aboutdesc'
import Footer from '../../Components/Footer/Footer'

function MainHome() {
  return (
    <div className='main-home'>
        <HomeNav/>
        <Banner/>
        <NewsLetter/>
        <Aboutdesc/>
        <Footer/>
    </div>
  )
}

export default MainHome