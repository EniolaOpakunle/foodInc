import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../actions';

export default function 
() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const exit = () =>{
    dispatch(logout())
    navigate('/')
  }
  const dontExit =() =>{
    navigate('/general1234')
  }
  return (
    <>
    <div className="container pt-50">
      < p>Are you sure you want exit? </p>
      <div className='d-flex'>
        <button className='btn btn-success mx-auto w-25' onClick={()=>exit()}>Yes</button>
        <button className='btn btn-success mx-auto w-25' onClick={()=>dontExit() }>No</button>
    </div>
    </div>
    </>
  )
}
