import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import '../App.css'

export default function Pricing () {
    const navigate = useNavigate();
    const basicSignUp =() =>{
        navigate('/signup')
    }
    const premiumSignUp = () =>{
        navigate('/signup')
    }
  return (
    <div  className=' font-monospace'>
        <Navbar/>
        <h3 className='text-center my-3  head'>Pricing</h3>
        <div className='d-flex m-auto mx-5 my-5'>
            <div className='card mx-5' style={{width: '30rem'}}>
                <div className='card-body'>
                    <h5 className='card-title text-center my-3 fs-4 fw-normal '>BASIC</h5>
                    <p className='card-text text-center price fs-1 fw-bold'>$0.00</p>
                    <p className='card-text text-center '>Recipe search</p>
                    <p className='card-text text-center'>Daily meal planner</p>
                    <p className='card-text text-center'>Free healthy tips</p>
                    <button className='btn text-center text-light pricing-btn' id='pricing-btn1' onClick={basicSignUp}>Sign up</button>
                </div>
            </div>
            <div className='card mx-5' style={{width: '30rem'}}>
                <div className='card-body'>
                    <h5 className='card-title text-center my-3 fs-4 fw-normal'>PREMIUM</h5>
                    <p className='card-text text-center price fs-1 fw-bold'>$50.00</p>
                    <p className='card-text text-center'>Recipe search by cuisine, diet and equipments</p>
                    <p className='card-text text-center'>Weekly meal planner</p>
                    <p className='card-text text-center'>Analyzed recipe instructions</p>
                    <p className='card-text text-center'>Wine description</p>
                    <p className='card-text text-center'>Free healthy tip</p>
                    <button className='btn text-center text-light pricing-btn' onClick={premiumSignUp}>sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
};
