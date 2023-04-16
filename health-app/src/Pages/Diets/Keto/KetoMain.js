import React, { useEffect, useState } from 'react'
import './ketoMain.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'

function KetoMain() {

    const [keto,setKeto] = useState([])

    useEffect(()=>{
        setKeto(JSON.parse(localStorage.getItem('Keto-diet')))
    },[])

    
  return (
    <>
    <div className='ketoMain'>
    <HomeNav/>
        <div className="ketoWrapper">
            {
                keto && keto.map(data=>(
                    <div className="ketoCard">
                        <h3>Day <span className='ketoDay'>{data.day}</span></h3>
                        <p>{`Breakfast: ${data.breakfast}`}</p>
                        <p>{`Lunch: ${data.lunch}`}</p>
                        <p>{`Dinner: ${data.dinner}`}</p>
                        <div className="ketoCardSub">
                            <span className='ketoFat'>{`fat ${data.fat}`}</span>
                            <span className='ketoProt'>{`protein ${data.protein}`}</span>
                            <span className='ketoCarb'>{`carbs ${data.carbs}`}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default KetoMain