import React from 'react'
import Navbar from './Navbar'
import { PaystackButton } from 'react-paystack'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function () {
    const navigate = useNavigate()
    
    let count = useSelector(state=>state.usersReducer.allUsers)
    let found = count.find((val , index) => (val.version  == 'premium' && index == count.length - 1))
    // console.log(count)
    // let found = count[count.length - 1]
    console.log(found)
  return (
    <>
    <Navbar/>
    <div className="container-fluid w-50 my-5 p-5 shadow bg-body rounded">
        <h3 className='text-center'>Payment Page</h3>
        <form action="">
            <div className='form-group'>
                <label htmlFor="" className='form-label'>Firstname</label>
                <input type="text" className='form-control' value={found.firstname} />
            </div>
            <div className='form-group'>
                <label htmlFor="" className='form-label'>Amount</label>
                <input type="disabled" className='form-label form-control' value='3000' />
            </div>
            <PaystackButton 
            className='btn btn-info'
            amount='3000'
            email={found.email}
            firstname={found.firstname}
            publicKey='pk_test_76013815e0fbf75bc56bebb10da88d769d6e8928'
            onSuccess={
                navigate('/signin')
            }
            onClose={
                alert('transaction not completed')
            }
            >Pay</PaystackButton>
        </form>
    </div>

    </>
  )
}
