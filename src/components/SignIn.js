import React from 'react'
import { verify } from '../actions'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css'

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    // let count = useSelector(state=>state.usersReducer.allUsers)
    // console.log(count)
    const verifyUser =(vals)=>{
      try{
        dispatch(verify(vals))
        navigate('/dashboard')

      }catch(e){
        console.log(e)
        seterror(e)
      }
    } 

  return (
    <>
    <Navbar/>
    <div className="container-fluid w-50 my-5 p-5 shadow bg-body rounded">
      <h3 className='head text-center'>Sign In Form</h3>
    {/* <form action=""> */}
        <label htmlFor="">Email</label>
        <input 
        type="text"
        onChange={(e)=>setemail(e.target.value)}
        className= 'form-control my-2'
        value = {email}
        />
        <label htmlFor="">Password</label>
        <input 
        type="text" 
        onChange={(e)=>setpassword(e.target.value)}
        className='form-control my-2'
        value = {password}
        />
        <button className='form-control btn submit-btn' onClick={()=>verifyUser({email, password})}>Submit</button>
         <p className='text-danger text-center my-5'>{error}</p>

    {/* </form> */}
    </div>
    </>
  )
}
