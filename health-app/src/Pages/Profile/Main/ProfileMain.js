import React from 'react'
import './profileMain.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ProfileMain() {
  return (
    <div className='profileMain'>
        <HomeNav/>
            <div className="profileMain-wrapper">
                <div className="profileMain-body">
                    <h1 className='profileMain-heading'>Hai Arun</h1>
                    <div className="profileMain-card">
                        <span>Profile</span>
                    </div>
                    <div className="profileMain-card">
                        <span>Edit Profile</span>
                    </div>
                    <div className="profileMain-card">
                        <span>Logout</span>
                    </div>
                    <div className="profileMain-card">
                        <span style={{"color":"red"}}>Delete Account</span>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default ProfileMain