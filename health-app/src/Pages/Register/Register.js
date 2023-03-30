import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <form>
            <h1 className='register-heading'>REGISTER</h1>
            <input type='text' placeholder="Enter username"/>
            <input type='text' placeholder="Enter email"/>
            <input type='text' placeholder="Enter passsword"/>
            <input type='submit' placeholder="REGISTER"/>
            <span>Already have an account ? <Link to='/login'>LOGIN</Link></span>
        </form>
    </div>
  )
}

export default Register