import React, { useState,useEffect } from 'react'
import stretches from '../../../../API/streches.json'
import './stretch.css'
import HomeNav from '../../../../Components/HomeNav/HomeNav'
import { Link } from 'react-router-dom'

function Stretch() {
    const [stretch,setStretch] = useState([])

    useEffect(()=>{
        setStretch(stretches['basic-streches'])
    },[])
    
    const handleitem=(data)=>{
        localStorage.setItem('id',data.id)
        localStorage.setItem('name',data.name)
        localStorage.setItem('time',data.time)
        localStorage.setItem('image',data.image)
        localStorage.setItem('steps',JSON.stringify(data.steps))
    }
  return (
    <>
    <HomeNav/>
    <div className='stretch-container'>
        <div className='stretch-wrapper'>
            <h1>Basic Stretches</h1>
           
        {
            stretch && stretch.map(data=>(
                <Link onClick={()=>handleitem(data)} to={`/stretch/${data.id}`} className='stretch-card'>
                <div className='card-left'>
                    <h1>{data.name}</h1>
                    </div>
                <div className='card-right'><img src={data.image}/></div>
                </Link>
                ))
            }
        </div>
    </div>
</>
  )
}

export default Stretch