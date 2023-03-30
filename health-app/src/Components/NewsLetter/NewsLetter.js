import React from 'react'
import './newsLetter.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function NewsLetter() {
  return (
    <div className='newsletter'>
            <h1>Get Updates</h1>
            <div className='newsletter-input'>
                <input type='text' placeholder='Enter email'/>
                <button><KeyboardArrowRightIcon/></button>
            </div>
        </div>
  )
}

export default NewsLetter