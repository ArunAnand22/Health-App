import React, { useEffect, useState } from 'react'
import HomeNav from '../../../../Components/HomeNav/HomeNav';
import './weightGain.css'

function WeightGain() {
    const [weightGain,setWeightGain] = useState([])

    useEffect(()=>{
        setWeightGain(JSON.parse(localStorage.getItem('Weight-gain')))
    },[])
  return (
    <>
    <HomeNav/>
    <div className='weightGain'>
        <div className="weightGain-wrapper">
            {
                weightGain && weightGain.map(item=>(
                    <div className="weightGain-card">
                        <h2>{`Day ${item.day}`}</h2>
                        <h4>{`Calorie count: ${item.calories}`}</h4>
                        <p>{`Early morning: ${item.earlymorning}`}</p>
                        <p>{`Breakfast: ${item.breakfast}`}</p>
                        <p>{`Mid-morning: ${item.MidMorning}`}</p>
                        <p>{`Lunch: ${item.Lunch}`}</p>
                        <p>{`PostLunch: ${item.PostLunch}`}</p>
                        <p>{`Dinner: ${item.Dinner}`}</p>
                        <p>{`Before bed: ${item.BedTime}`}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default WeightGain