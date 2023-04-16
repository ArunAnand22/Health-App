import React,{useState,useEffect} from 'react'
import './workoutMain.css'
import { Link } from 'react-router-dom'
import HomeNav from '../../../../Components/HomeNav/HomeNav'
import workouts from '../../../../API/streches.json'

function WorkoutMain() {
    const [workout,setWorkout] = useState([])

    useEffect(()=>{
        setWorkout(workouts["intense-workout"])
    },[])
    
    const handleitem=(data)=>{
        localStorage.setItem('id',data.id)
        localStorage.setItem('name',data.name)
        localStorage.setItem('reps',data.reps)
        localStorage.setItem('image',data.image)
        localStorage.setItem('equipment',data.equipment)
        localStorage.setItem('steps',JSON.stringify(data.steps))
    }
  return (
    <>
    <HomeNav/>
    <div className='stretch-container'>
        <div className='stretch-wrapper'>
            <h1>7-minute Workouts</h1>
           
        {
            workout && workout.map(data=>(
                <Link onClick={()=>handleitem(data)} to={`/workout-desc/${data.id}`} className='stretch-card'>
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

export default WorkoutMain