import React from 'react'
import './notFound.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import Footer from '../../Components/Footer/Footer'

function NotFound() {
  return (
    <>
    <HomeNav/>
    <div className='pageNot-wrapper'>
    <img className='pageNotFound' src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' alt='Page Not Found'/>
    </div>
    <Footer/>
    </>
  )
}

export default NotFound