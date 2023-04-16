import React,{useState,useEffect} from 'react'
import './fatLMain.css'
import HomeNav from '../../../../Components/HomeNav/HomeNav'
import { Link } from 'react-router-dom'

function FatLMain() {
    const [result,setResult] = useState([])

    useEffect(()=>{
      setResult(JSON.parse(localStorage.getItem('Fat-loss')))
    },[])
    console.log(result)
    
  return (
    <>
    <HomeNav/>
    <div className='fatMain-wrapper'>
      <div className="fatMain-section">

      {
        result && result.map(data=>(
          <div className="fatMain-card">
            <h2 className='fatMain-heading'>Time:<span className='time'>{`${data.time}`}</span></h2>
              <div className="fatMain-ingredients">
                {data.ingredients.map(items=>(
                  <p>Items:{items.item}-Calorie:<span className='calorie'>{items.calorie}</span></p>
                  ))}
              </div>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default FatLMain