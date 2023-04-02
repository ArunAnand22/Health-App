import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import './stretchDetail.css'
import HomeNav from '../../../../Components/HomeNav/HomeNav'
import Footer from '../../../../Components/Footer/Footer'
import stretches from '../../../../API/streches.json'

function StretchDetail() {
    const [name,setName] = useState('')
    const [time,setTime] = useState('')
    const [image,setImage] = useState('')
    const [steps,setSteps] = useState([])
    
    const id = useParams()
    
    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setTime(localStorage.getItem('time'))
        setImage(localStorage.getItem('image'))
        setSteps(JSON.parse(localStorage.getItem('steps')))
    },[])
    console.log(steps);
  return (
    <>
    <HomeNav/>
    
        <div className='detail-container'>
          <div className='detail-img'>
            <img src={image}/>
          </div>
          <div className='detail-desc'>
            <h1>{name}</h1>
            <h4>Time: {time}</h4>

            <div className='step_list'>
            {steps && steps.map(item=>(
              <p>{item.step}</p>
              ))}
            </div>
            
          </div>
        </div>
    
    <Footer/>
    </>
  )
}

export default StretchDetail