import React from 'react'
import './startingPage.css'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function StartingPage() {
  return (
    <div className='startingPage'>
        <div className="container">
            <div className="wrapper">
                <h1> <img src='https://webstockreview.net/images/clipart-exercise-fitness-centre-19.png' style={{width:"230px"}}/>GOD'S GYM</h1>
                <span>We help you acheive your dream physique.</span>
                <span>Want to know more about us..</span>
                <Link to="/about">
                <button><ChevronRightIcon/></button>
                </Link>
                <Link to='/login' className='login-link'>
                LOGIN
                </Link>
            </div>
        </div>
    </div>
  )
}

export default StartingPage