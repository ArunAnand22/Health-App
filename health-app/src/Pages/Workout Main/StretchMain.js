import React from 'react'
import './stretchMain.css'
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function StretchMain() {

    
  return (
    <div className='stretch-container'>
        <div className='stretch-wrapper'>
            <div className='card-section'>

            <div className='card'>
                <div className='card-left'>
                    <h2>Basic Streches</h2>
                    <p>Flexibility</p>
                    <Link className='btn' to='/stretch-workout'>
                    <ArrowCircleRightIcon/>
                    </Link>
                </div>
                <div className='card-right'>
                    <img src='http://3.bp.blogspot.com/-R8oi48R-O1w/VPzFq4R3BcI/AAAAAAAAANU/qzIdE8JZIoo/s1600/bentrotation.gif'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-left'>
                    <h2>7 minute workout</h2>
                    <p>Endurance</p>
                    <Link className='btn' to='/workout-main'>
                    <ArrowCircleRightIcon/>
                    </Link>
                </div>
                <div className='card-right'>
                    <img src='https://cdn.dribbble.com/users/1304577/screenshots/4227985/gym-guy-8x6.gif'/>
                </div>
            </div>
            <div className='card' style={{marginBottom:"20px"}}>
                <div className='card-left'>
                    <h2>Mental Health</h2>
                    <p>Strength</p>
                    <Link className='btn' to=''>
                    <ArrowCircleRightIcon/>
                    </Link>
                </div>
                <div className='card-right'>
                    <img src='https://media.giphy.com/media/xUA7bbcVDWik6cPdmg/giphy.gif'/>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default StretchMain