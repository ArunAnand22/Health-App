import React,{useState,useEffect} from 'react'
import './workoutDesc.css'
import HomeNav from '../../../../Components/HomeNav/HomeNav'

function WorkoutDesc() {
  const [name,setName]=useState('')
  const [reps,setReps]=useState('')
  const [image,setImage]=useState('')
  const [equipment,setEquipment]=useState('')
  const [steps,setSteps]=useState([])

useEffect(()=>{
  setName(localStorage.getItem('name'))
  setReps(localStorage.getItem('reps'))
  setImage(localStorage.getItem('image'))
  setEquipment(localStorage.getItem('equipment'))
  setSteps(JSON.parse(localStorage.getItem('steps')))
},[])
  return (
    <>
    <HomeNav/>
    <div className='workoutContainer'>
      <h1 className="workoutTitle">{name}</h1>
      <div className="workoutWrapper">
        <img src={image}/>
        <span>Equipment required: <span className='firstChild'>{equipment}</span></span>
        <span>No of reps: <span className='firstChild'>{reps}</span></span>
        <div className="workoutSteps">
          {steps && steps.map(item=>(
            <p className="listSteps">{item.step}</p>
            ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default WorkoutDesc