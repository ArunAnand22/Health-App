import React, { useState,useEffect } from 'react'
import './blogMain.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'
import Blog from '../../../API/blog.json'
import { Link } from 'react-router-dom'

function BlogMain() {
    const [blog,setBlog] = useState([])

    useEffect(()=>{
        setBlog(Blog)
    },[])

    const blogMain=(datas)=>{
        localStorage.setItem('Blog-Data',JSON.stringify(datas))
    }
    
  return (
      <div className="blogContainer">
            <HomeNav/>
            <div className="blogWrapper">
                {
                    blog && blog.map(datas=>(
                        <Link to='/blog-desc' onClick={()=>blogMain(datas)}>
                        <div className="blogCards">
                            <img src={datas.image}/>
                            <div className='blogCardContainer'>
                                {datas.title}
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
            <Footer/>
        </div>
  )
}

export default BlogMain