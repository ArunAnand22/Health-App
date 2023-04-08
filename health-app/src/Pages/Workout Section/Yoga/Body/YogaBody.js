import React, { useEffect, useState } from 'react'
import './yogaBody.css'
import Yoga from '../../../../API/streches.json'
import { Link } from 'react-router-dom'

function YogaBody() {
    const [yoga,setYoga] = useState([])

    useEffect(()=>{
        setYoga(Yoga["yoga-section"])
    },[])

    const handleitem=(data)=>{
        localStorage.setItem('name',data.name)
        localStorage.setItem('image',data.image)
        localStorage.setItem('category',data.category)
        localStorage.setItem('steps',JSON.stringify(data.steps))
        localStorage.setItem('benefits',JSON.stringify(data.benefits))
        localStorage.setItem('safety',JSON.stringify(data.safety))
    }
    
  return (
    <div className='yoga'>
        <div className="yogaWrapper">
        {
            yoga && yoga.map(data=>(
                <Link style={{textDecoration:"none",color:"inherit"}} onClick={()=>handleitem(data)} to={`/yoga-desc/${data.id}`} className='yogastretch-card'>
                <div className='yogacard-Left'>
                    <h1>{data.name}</h1>
                    </div>
                <div className='yogacard-Right'><img src={data.image}/></div>
                </Link>
                ))
            }
        </div>
    </div>
  )
}

export default YogaBody