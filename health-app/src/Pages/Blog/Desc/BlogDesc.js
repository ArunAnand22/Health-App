import React, { useEffect, useState } from 'react'
import './blogDesc.css'
import HomeNav from '../../../Components/HomeNav/HomeNav'
import Footer from '../../../Components/Footer/Footer'

function BlogDesc() {

    const [blogDesc,setBlogDesc] = useState([])

    useEffect(()=>{
        setBlogDesc(JSON.parse(localStorage.getItem('Blog-Data')))
    },[])
    console.log(blogDesc);

  return (
    <div className='blogDesc-main'>
        <HomeNav/>
        <div className='blogDesc-wrapper'>
            <h2 className='blogDesc-title'>{blogDesc.title}</h2>
            <img src={blogDesc.image}/>
                <div className='blogDesc-DateCont'>
                    <p>Date posted:<span className='blogDesc-D'>{blogDesc.postDate}</span></p>
                    <p>Category:<span className='blogDesc-D'>{blogDesc.category}</span></p>
                </div>
            <p className='blogDesc-content'>{blogDesc.content}</p>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogDesc