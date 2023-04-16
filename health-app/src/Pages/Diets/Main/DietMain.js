import React from 'react'
import './dietMain.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Diet from '../../../API/diet.json'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function DietMain() {
    
    const handleEvent1=()=>{
        localStorage.setItem('Fat-loss',JSON.stringify(Diet['Fat-loss']))
    }
    const handleEvent2=()=>{
        localStorage.setItem('Weight-gain',JSON.stringify(Diet['weight-gain']))
    }
    const handleEvent3=()=>{
        localStorage.setItem('Keto-diet',JSON.stringify(Diet['keto-diet']))
    }

  return (
    <>
    <HomeNav/>
    { Diet && <div className='dietMain'>
        <div className="dietMain-wrapper">

            <div className="dietMainCard">
                <div className="dietMCard-left">
                    <h1>Fat-Loss</h1>
                    <Link to='/fatloss-section' onClick={()=>handleEvent1()} className='link' style={{textDecoration:"none",color:"inherit"}}><button><ArrowForwardIosIcon/></button></Link>
                </div>
                <div className="dietMCard-right">
                    <img src="https://www.clipartkey.com/mpngs/m/26-264442_weight-loss-cartoon.png" alt="Fat-loss" />
                </div>
            </div>
            <div className="dietMainCard">
                <div className="dietMCard-left">
                    <h1>Weight Gain</h1>
                    <Link to='/weight-gain' onClick={()=>handleEvent2()} className='link' style={{textDecoration:"none",color:"inherit"}}><button><ArrowForwardIosIcon/></button></Link>
                </div>
                <div className="dietMCard-right">
                    <img src="https://i1.wp.com/gainingtactics.com/wp-content/uploads/2015/11/eating-weight-gain.png" alt="Weight gain" />
                </div>
            </div>
            <div className="dietMainCard">
                <div className="dietMCard-left">
                    <h1>Keto Diet</h1>
                    <Link to='/keto-main' onClick={()=>handleEvent3()} className='link' style={{textDecoration:"none",color:"inherit"}}><button><ArrowForwardIosIcon/></button></Link>
                </div>
                <div className="dietMCard-right">
                    <img src="https://image.freepik.com/free-vector/vector-illustration-keto-diet_95397-634.jpg" alt="Keto-diet" />
                </div>
            </div>

        </div>
    </div>
    }
    <Footer/>
    </>
  )
}

export default DietMain