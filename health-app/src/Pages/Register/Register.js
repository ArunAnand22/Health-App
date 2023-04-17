import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [userName,setuserName]=useState('')
  const [userEmail,setuserEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const registerSubmit=(fieldName,value)=>{
    if(fieldName==='userName'){
      setuserName(value)
    }else if(fieldName==='userEmail'){
      setuserEmail(value)
    }else if(fieldName==='password'){
      setPassword(value)
    }
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    if(userName.trim()==="" || userEmail.trim()==="" || password.trim()===""){
      toast.error('Invalid details', {
        position: toast.POSITION.TOP_CENTER
      })
    }else{
      toast.success('Registration success', {
        position: toast.POSITION.TOP_CENTER
    })
    localStorage.setItem('user',JSON.stringify({"username":userName,"useremail":userEmail,"userpassword":password}))
    navigate('/login')
    
    }
  }

  return (
    <div className='register'>
        <form onSubmit={(e)=>{onSubmitHandler(e)}} className='register-form'>
          <ToastContainer/>
            <h1 className='register-heading'>REGISTER</h1>
            <input type='text' value={userName} onChange={e=>registerSubmit("userName",e.target.value)} placeholder="Enter username"/>
            <input type='text' value={userEmail} onChange={e=>registerSubmit("userEmail",e.target.value)} placeholder="Enter email"/>
            <input type='text'value={password} onChange={e=>registerSubmit("password",e.target.value)} placeholder="Enter passsword"/>
            <input type='submit' value='Sign up' className='registerSubmit'/>
            <span>Already have an account ? <Link to='/login' className='registerLogin'>LOGIN</Link></span>
        </form>
    </div>
  )
}

export default Register