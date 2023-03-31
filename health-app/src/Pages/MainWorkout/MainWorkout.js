import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HomeNav from '../../Components/HomeNav/HomeNav'
import StretchMain from '../Workout Main/StretchMain'
import './mainWorkout.css'

function MainWorkout() {
  return (
    <div>
      <HomeNav/>
       {/* Workout Main Page */}
      <StretchMain/>
      <Footer/>
    </div>
  )
}

export default MainWorkout