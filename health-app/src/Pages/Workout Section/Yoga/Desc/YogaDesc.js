import React, { useState,useEffect } from 'react'
import './yogaDesc.css'
import HomeNav from '../../../../Components/HomeNav/HomeNav'
import Footer from '../../../../Components/Footer/Footer'
import { Home } from '@mui/icons-material'

function YogaDesc() {

    const [yogaName,setYogaName] = useState('')
    const [yogaImg,setYogaImg] = useState('')
    const [yogacategory,setYogaCategory] = useState('')
    const [yogaSteps,setYogaSteps] = useState([])
    const [yogaBenefits,setYogaBenefits] = useState([])
    const [yogaSafety,setYogaSafety] = useState([])

    useEffect(()=>{
        setYogaName(localStorage.getItem('name'))
        setYogaImg(localStorage.getItem('image'))
        setYogaCategory(localStorage.getItem('category'))
        setYogaSteps(JSON.parse(localStorage.getItem('steps')))
        setYogaBenefits(JSON.parse(localStorage.getItem('benefits')))
        setYogaSafety(JSON.parse(localStorage.getItem('safety')))
    },[])

  return (
    <>
    <HomeNav/>
    <div className='yogaDesc'>
        <div className="yogaDescWrapper">
            <h1 className='descTitle'>{yogaName}</h1>
            <img src={yogaImg}/>
                <h2 className='descLvl'> Level: {yogacategory}</h2>
                <div className="yogaDesSteps">
                {
                    yogaSteps && yogaSteps.map(steps=>(
                        <p>{steps.step}</p>
                        ))
                    }
                </div>

                <div className="yogaBenefitSteps">
                    <h1>Benefits</h1>
                    {
                        yogaBenefits && yogaBenefits.map(benefit=>(
                            <p>{benefit.step}</p>
                            ))
                        }
                </div>

                <div className="yogaSafetySteps">
                    <h1>Safety</h1>
                    {
                        yogaSafety && yogaSafety.map(safety=>(
                            <p>{safety.step}</p>
                            ))
                        }
                </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default YogaDesc