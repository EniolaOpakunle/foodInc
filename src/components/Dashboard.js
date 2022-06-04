import { Link } from 'react-router-dom'
import '../App.css'
import profileImage from '../images/download.png'
import Weather from './Weather'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  let counts = useSelector(state=>state.usersReducer.allUsers)
  let index = JSON.parse(localStorage.currentUser)
  console.log(index)
  let found = counts.find((val, ind) => (ind == index ))
  console.log(found)
    
  return (
    <div>
        <div className='d-flex'>
            <div className='' id='dashboard-flex-div1'>
                <h3 className='text-center text-white my-3'>Eniola</h3> 
                <p ><Link to={'/mealPlan'} className= 'text-light nav-link text-center'>Meal plan</Link></p>
                <p><Link to={'/recipe'} className='text-light nav-link text-center'> Recipe Search</Link></p>
                <p><Link to={'/diet'} className='text-light nav-link text-center'>Food Diet</Link></p>
                <p><Link to={'/tips'} className='text-light nav-link text-center'>Healthy Tips</Link></p>
                <p><Link to={'/settings'} className='text-light nav-link text-center' id='settings-Link'>Settings</Link></p>
                <p><Link to={'/logout0000'} className='text-light nav-link text-center'>Logout</Link></p>
            </div>
            <div className='' id='dashboard-flex-div2'>
                <div className='d-flex'>
                    <div className='display-div' id='profileDisplayDiv'>
                        <h3 className=' text-center my-3'>Profile</h3>
                        <div className='row my-2'>
                            <label htmlFor="" className='col-2 mx-2'>firstname</label>
                            <input type="text" className='col-8 mx-3' value={found.firstname} disabled/>
                        </div>
                        <div className='row my-2'>
                            <label htmlFor="" className='col-2 mx-2'>Lastname</label>
                            <input type="text" className='col-8 mx-3' value={found.lastname} disabled/>
                        </div>
                        <div className='row my-2'>
                            <label htmlFor="" className='col-2 mx-2'>Username</label>
                            <input type="text" className='col-8 mx-3' value={found.username} disabled/>
                        </div>
                        <div className='row my-2'>
                            <label htmlFor="" className='col-2 mx-2'>Email</label>
                            <input type="text" className='col-8 mx-3' value={found.email} disabled/>
                        </div>
                        <div className='row my-2'>
                            <label htmlFor="" className='col-2 mx-2'>Challenge</label>
                            <input type="text" className='col-8 mx-3' value={found.challenge} disabled/>
                        </div>
                        <div className='row'>
                            <label htmlFor="" className='col-2 mx-2'>Password</label>
                            <input type="text" className='col-8 mx-3' value={found.password} disabled  />
                        </div>
                    </div>
                    <div className='display-div' id='weatherDisplay-div'>
                        <h3 className='my-3 text-center'>Weather</h3>
                        <Weather/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
