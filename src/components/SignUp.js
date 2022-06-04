import React from 'react'
import { useFormik } from 'formik'
// import * as Yup from 'yup'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import {register, hold} from '../actions'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';
// import { PaystackButton } from 'react-paystack';

export default function SignUp() {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
      firstname :'',
      lastname :'',
      username :'',
      email :'',
      challenge :'',
      password :'',
      version:''
    },
    validationSchema : Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Not an email'),
      password: Yup.string().required('Required'),
      challenge: Yup.string().required('Required'),
      firstname: Yup.string().required('Required'),
      lastname: Yup.string().required('Required'),
      version: Yup.string().required(
        ' you must pick the version of your choice',
      ),
    }),
    onSubmit: (values) => {
      if (values.version == 'basic') {
        try {
          dispatch(register(values));
          formik.resetForm({values: ""})
          naviagte('/signin')
        } catch (e) {
          console.log(e)      
        }
      }else{
        try {
          console.log(values)
          dispatch(hold(values));
          formik.resetForm({values: ""})
          naviagte('/paymentpage')
        } catch (e) {
          console.log(e)      
        }
      }
      
    }
  })
    
  return (
    <>
    <Navbar/>
    <div className="container-fluid my-2 w-75 p-5 shadow bg-body rounded ">
      <h3 className='text-center my-3 head'>Sign Up Form</h3>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">First name</label>
        <input 
        type="text" 
        className={formik.errors.firstname && formik.touched.firstname? 'form-control is-invalid my-2': 'form-control my-2'} 
        name='firstname'
        onChange={formik.handleChange}
        value= {formik.values.firstname}
        onBlur={formik.handleBlur}
        />
        {formik.touched.firstname? <div className='text-danger'>{formik.errors.firstname}</div>: null}
        <label htmlFor="">Last name</label>
        <input 
        type="text" 
        className={formik.errors.lastname && formik.touched.lastname? 'form-control is-invalid my-2' : 'form-control my-2'} 
        name='lastname'
        onChange={formik.handleChange}
        value={formik.values.lastname}
        onBlur={formik.handleBlur}
        />
        {formik.touched.lastname? <div className='text-danger'>{formik.errors.lastname}</div>: null}
        <label htmlFor="">Username</label>
        <input 
        type="text" 
        className={formik.errors.username && formik.touched.username?' form-control is-invalid my-2':'form-control my-2'}
        name='username' 
        onChange={formik.handleChange} 
        value={formik.values.username}
        onBlur={formik.handleBlur}
        />
        {formik.touched.username?<div className='text-danger'>{formik.errors.username}</div>:null}
        <label htmlFor="">email</label>
        <input 
        type="text" 
        className={formik.errors.email && formik.touched.email? 'form-control is-invalid my-2' : 'form-control my-2'} 
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        />
        {formik.touched.email? <div className=' text-danger'>{formik.errors.email}</div>: null}
        <label htmlFor="">Any health challenge? write below. if not, write 'nil'</label>
        <input 
        type="text" 
        className={formik.errors.challenge && formik.touched.challenge? 'form-control is-invalid my-2':'form-control my-2'}
        name='challenge'
        onChange={formik.handleChange}
        value ={formik.values.challenge}
        onBlur = {formik.handleBlur}
        />
        {formik.touched.challenge? <div className='text-danger'>{formik.errors.challenge}</div>: null}
        <label htmlFor="" className='my-2'>Version</label>
        <div className='d-flex my-2x'>
          <div className='form-check mx-5'>
            <input 
            type="radio" 
            className='form-check-input'
            name='version'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="basic"/>
            <label htmlFor="" className='form-check-label'>Free</label>
          </div>
          <div>
            <input 
            type="radio" 
            className='form-check-input'
            name='version'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="premium" />
            <label htmlFor="" className='form-check-label'>Premium</label>
            {formik.touched.version? <div className='text-danger'>{formik.errors.version}</div>: null}
          </div>
        </div>
        

        <label htmlFor="">Password</label>
        <input 
        type="password" 
        className={formik.errors.password && formik.touched.password? 'form-control is-invalid my-2' : 'form-control my-2'}
        name = 'password' 
        onChange={formik.handleChange}
        value = {formik.values.password}
        onBlur = {formik.handleBlur}
        />
        {formik.touched.password? <div className='text-danger'>{formik.errors.password}</div>: null}
        <button type='submit' className='form-control btn submit-btn text-light'>Submit</button>
    </form>
    </div>

    </>
  )
}
