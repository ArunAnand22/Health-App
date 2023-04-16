import React from 'react'
import './homeNav.css'
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookIcon from '@mui/icons-material/Book';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function HomeNav() {
  return (
    <div className='header'>  
        <div className='navbar'>
            <span className='logo'>
                <img src='https://webstockreview.net/images/clipart-exercise-fitness-centre-19.png' style={{width:"60px"}}/>
            </span>
            <ul className='nav_list'>
                <Link to='/home' className='nav_link'>
                <li className='list_item'>
                    <span className='main-icon'>Home</span>
                    <span className='mobile-icon'><HomeIcon/></span>
                </li>
                </Link>
                <Link to='/home-workout' className='nav_link'>
                <li className='list_item'>
                    <span className='main-icon'>Workout</span>
                    <span className='mobile-icon'><FitnessCenterIcon/></span>
                </li>
                </Link>
                <Link to='/main-blog' className='nav_link'>
                <li className='list_item'>
                    <span className='main-icon'>Blog</span>
                    <span className='mobile-icon'><BookIcon/></span>
                </li>
                </Link>
                <Link to='/dietmain-section' className='nav_link'>
                <li className='list_item'>
                    <span className='main-icon'>Diet</span>
                    <span className='mobile-icon'><LocalDiningIcon/></span>
                </li>
                </Link>
                <Link to='/profile' className='nav_link'>
                <li className='list_item'>
                    <span className='main-icon'>Profile</span>
                    <span className='mobile-icon'><PersonIcon/></span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default HomeNav