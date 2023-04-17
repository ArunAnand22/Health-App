import React, { useState,useEffect } from 'react'
import './profileMain.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'
import { useNavigate } from "react-router-dom";

function ProfileMain() {
    const [user,setUser] = useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        setUser(localStorage.getItem('current-user'))
    },[])

    const logout=()=>{
        localStorage.removeItem('current-user')
        navigate('/')
    }
  return (
    <div className='profileMain'>
        <HomeNav/>
            <div className="profileMain-wrapper">
                <div className="profileMain-body">
                    <h1 className='profileMain-heading'>Hai {user}</h1>
                    <div className="profileMain-card">
                        <span>Profile</span>
                    </div>
                    <div className="profileMain-card">
                        <span>Edit Profile</span>
                    </div>
                    <div className="profileMain-card">
                        <span className='profile-logout' onClick={logout}>Logout</span>
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