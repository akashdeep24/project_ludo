import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthLoading() {
const navigate = useNavigate()
  const checkToken = () => {
    const token = localStorage.getItem('userDetails')
    if(token){
        navigate('/home')
    }
    else{
        navigate('/login')
    }
  }
  useEffect(()=>{
    checkToken()
  },[])
  return (
    <div className='text-white text-2xl'>Loading...</div>
  )
}

export default AuthLoading