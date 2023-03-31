import React from 'react'
import Aboutdesc from '../../Components/AboutDesc/Aboutdesc'
import Aboutnav from '../../Components/AboutNav/Aboutnav'
import AboutService from '../../Components/AboutService/AboutService'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import './about.css'

function About() {
  return (
    <div className='about'>
        <Aboutnav/>
        <Banner type="about"/>
        <AboutService/>
        <NewsLetter/>
        <Aboutdesc/>
        <Footer/> 
    </div>
  )
}

export default About