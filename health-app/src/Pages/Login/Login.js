import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './login.css'
import { useNavigate } from "react-router-dom";

function Login() {

  const [userEmail,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser]=useState('')
  const navigate=useNavigate()

  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem('user'))
    if(items){
      setUser(items)
    }
  },[])

  const loginSubmit=(fieldname,value)=>{
    if(fieldname==='userName'){
      setUsername(value)
    }else if(fieldname==='password'){
      setPassword(value)
    }
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if(user.useremail==userEmail){
      if(user.userpassword==password){
        localStorage.setItem('current-user',user.username)
        navigate('/home')
        toast.success('Successfully Login', {
          position: toast.POSITION.TOP_CENTER
        })
      }else{
        toast.error('Invalid password', {
          position: toast.POSITION.TOP_CENTER
        })
      }
    }else{
      toast.error('Invalid email', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return (
    <div className='login'>
      <ToastContainer/>
        <form className='login-form' onSubmit={(e)=>{onSubmitHandler(e)}}>
            <h1>LOGIN</h1>
            <input className='form-input' value={userEmail} onChange={e=>loginSubmit("userName",e.target.value)} type="email" placeholder="Enter your email"/>
            <input className='form-input' value={password} onChange={e=>loginSubmit("password",e.target.value)} type="password" placeholder="Enter your password"/>
            <input className='login-button' type='submit' value='LOGIN'/>
            <span>New here ? <Link className='signup-link' to='/register'>Sign Up</Link></span>
        </form>
    </div>
  )
}

export default Login