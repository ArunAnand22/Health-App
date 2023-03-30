import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner-section'>
        <div className='banner-wrapper'> 
            <img src='https://wallpaperforu.com/wp-content/uploads/2021/07/Wallpaper-Muscle-Press-Pose-Athlete-Workout-Gym-Fitn27-scaled.jpg'/>
            <div className='wrapper-div'>
              <h1>Welcome to Gold Gym</h1>
              <span>The fitness facility for all your needs.</span>
              <button><Link to='/login'>Join Now</Link></button>    
            </div>
        </div>
    </div>
  )
}

export default Banner