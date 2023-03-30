import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <form className='login-form'>
            <h1>LOGIN</h1>
            <input className='form-input' type="email" placeholder="Enter your email"/>
            <input className='form-input' type="password" placeholder="Enter your password"/>
            <input className='login-button' type='submit' placeholder='LOGIN'/>
            <span>New here ? <Link className='link' to='/register'>Sign Up</Link></span>
        </form>
    </div>
  )
}

export default Login