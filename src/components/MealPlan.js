import React from 'react'
import { useState} from 'react'
import {useSelector} from 'react-redux'
import '../App.css'

export default function MealPlan() {
    // let counts = useSelector(state=>state.usersReducer.allUsers)
    let index = JSON.parse(localStorage.currentUser)
    console.log(index)
    let historyy = JSON.parse(localStorage.history)
    console.log(historyy)
    const [calories, setcalories] = useState('');
    const [mealData, setmealData] = useState([])
    const [nutrient, setnutrient] = useState([])
    const [timeFrame, settimeFrame] = useState('')
    const generate =() =>{
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=832dbaf2e32f43aca7d47d41cab98a3b&timeFrame=${timeFrame}&targetCalories=${calories}`
        ).then((response) =>response.json())
        .then((data) =>{
            let re = data
            setmealData(re)
            setnutrient(re.meals)
            console.log(nutrient)
        }).catch(()=>{
            console.log('error')
        })
    }
    const saveMealPlan = () =>{
        localStorage.history = JSON.stringify([...historyy, nutrient])
    }
    // let nutrient = mealData.nutrients
  return (
      <>
      <div className='position-relative'>
        <nav className="navbar navbar-light" id='recipeNav'>
           <span className="navbar-brand mb-0 h1">FoodInc</span>
        </nav>
        <div id='searchBackground'>
            <h4 className='text-center' id='searchH4'>Plan your meal with ease</h4>
            <p className='justify-content-center w-75 m-auto my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis incidunt sapiente eveniet quam obcaecati voluptas voluptatum! Voluptates odio inventore sapiente repudiandae ipsa quis beatae, possimus dignissimos minus magni nam dolorum.</p>
            <div className='d-flex justify-content-center '>
                <input 
                type="number" 
                id='searchInput'
                placeholder='calories e.g 2000'
                style={{width: '700px'}} 
                onChange={(e)=>setcalories(e.target.value)} />
                <button className=' my-2 searchBtn mx-2' onClick={()=>generate()}>Plan</button>
            </div>
            <div className='d-flex justify-content-center'>
                <label htmlFor="">Timeframe</label>
                <select name="" id="" className='' onChange={(e)=>settimeFrame(e.target.value)}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                </select>
            </div>
        </div>
        <div className='position-absolute row justify-content-center displayDiv'>
            {nutrient.map((val, index) =>(
                <div key={index} className='col-4 card'>
                    <img src={val.img} alt="" />
                    {/* {console.log(val)} */}
                    <h4 className='text-dark card-title '>{val.title}</h4>
                    <p>{val.id}</p>
                    <p>source URL: {val.sourceUrl}</p>
                    <button>Save</button>
                </div>
            ))}
        </div>
      </div>
      </>
  )
}
