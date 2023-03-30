import React from 'react'
import './aboutService.css'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function AboutService() {
  return (
    <div className='about-service'>
        <div className='service-wrapper'>
        <h1>OUR SERVICES</h1>
            <div className='sub-wrapper'>
            <card>
                <FitnessCenterIcon/>
                <h2>WORKOUTS</h2>
            </card>
            <card>
                <LocalDiningIcon/>
                <h2>DIET</h2>
            </card>
            <card>
                <LibraryBooksIcon/>
                <h2>BLOGS</h2>
            </card>
            </div>
        </div>
    </div>
  )
}

export default AboutService