import React from 'react'
import UseAxios from './UseAxios'
import person from '../images/download.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function PersonalProfile() {
  const [data, setdata] = useState([])
  const [currUser, setcurrUser] = useState('')
  const [longitude, setlongitude] = useState('')
  const [latitude, setlatitude] = useState('')
  const apikey = 'ca60239bd64a8dd45b1c2b9084c16b14';
  const url2 = (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
  let {isLoading, error, onlineData} = UseAxios(url2, longitude)
  // let {onlineData, error, loading} = UseAxios();
  // let count = useSelector(state=>state)
  // let count = useSelector(state=>state.usersReducer)
  let counts = useSelector(state=>state.usersReducer.allUsers)
  let index = JSON.parse(localStorage.currentUser)
  console.log(index)
  let found = counts.find((val, ind) => (ind == index ))
  console.log(found)
//   useEffect(() =>{
//     navigator.geolocation.getCurrentPosition(res => {
//         setlatitude(res.coords.latitude);
//         setlongitude(res.coords.longitude);
//         // console.log(latitude, longitude);
//     })
// }, [longitude])
  
    // console.log(counts)
    

  return (
    <>
      <div className="container-fluid row d-flex">
        <aside className='w-25 bg-info h-100 col-2'> 
          {/* <img src={person} alt="" /> */}
          <div>{found.username}</div>
          
          <div className='bg-dark '>
            <p ><Link to={'/mealPlan'} className= 'text-light nav-link'>Meal plan</Link></p>
            <p><Link to={'/recipe'} className='text-light nav-link'> Recipe Search</Link></p>
            <p><Link to={'/diet'} className='text-light nav-link'>Food Diet</Link></p>
            <p><Link to={'/tips'} className='text-light nav-link'>Healthy Tips</Link></p>
            <p className='text-light nav-link'>view Profile</p>
          </div>
          
        </aside>
        <div className='col-3 m-auto bg-warning'>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className='col-3 m-auto bg-danger'>
          <div>

          </div>
          <div>
            
          </div>
        </div>
        <div className='col-3 m-auto bg-secondary'>

        </div>
        {/* {isLoading && <div>...is Loading</div>}
        {onlineData.temp}
        {!error && <div> {error} </div>} */}
        
          {/* <img src={person} alt="" /> */}
        {/* <div className='col-6'>
          <p>FirstName:</p>
          <p>LastName:</p>
          <p>Username</p>
          <p>Age:yrs</p>
          <p>Email:</p>
          <p>Challenge</p>
          <p>Version:</p>
        </div>
        <div className='col-6'>
          <h1>hello</h1>
        </div> */}
      </div>
    </>
  )
}
