import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { PaystackButton } from 'react-paystack'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../actions'

const PaystackPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.usersReducer.waitingUser);

    const signIn=()=>{
        try{
            dispatch(register(userDetails))
            navigate('/signin')
        }catch(e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     console.log(userDetails);
    // }, []);
    
    // let count = useSelector(state=>state.usersReducer.allUsers)
    // let found = count.find((val , index) => (val.version  == 'premium' && index == count.length - 1))
    // console.log(count)
    // let found = count[count.length - 1]
    // console.log(found)
  return (
    <>
    <Navbar/>
    <div className="container-fluid w-50 my-5 p-5 shadow bg-body rounded">
        <h3 className='text-center'>Payment Page</h3>
            <div className='form-group'>
                <label htmlFor="" className='form-label'>Firstname</label>
                <input type="text" disabled className='form-control' value={userDetails.firstname + " " + userDetails.lastname} />
            </div>
            <div className='form-group'>
                <label htmlFor="" className='form-label'>Amount</label>
                <input type="text" disabled className='form-label form-control' value='3000' />
            </div>
            <PaystackButton 
            className='btn btn-info'
            text= 'pay'
            amount='300000'
            name={userDetails.firstname + " " + userDetails.lastname}
            publicKey='pk_test_76013815e0fbf75bc56bebb10da88d769d6e8928'
            email={userDetails.email}
            onSuccess = {signIn}
            onClose= {()=>{
                alert('transaction not completed');
            }} />
    </div>

    </>
  )
}

export default PaystackPage;