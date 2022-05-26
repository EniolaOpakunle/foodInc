import React from 'react'
import { useState } from 'react'

export default function MealPlan() {
    const [calories, setcalories] = useState('');
    const [mealData, setmealData] = useState([])
    const [timeFrame, settimeFrame] = useState('')
    const generate =() =>{
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=832dbaf2e32f43aca7d47d41cab98a3b&timeFrame=${timeFrame}&targetCalories=${calories}`
        ).then((response) =>response.json())
        .then((data) =>{
            setmealData(data)
            console.log(data)
        }).catch(()=>{
            console.log('error')
        })
    }
    let nutrient = mealData.nutrients
  return (
    <div className='container-fluid'>
        <h1 className='my-3'>Meal Plan</h1>

        <input type="number" className='w-50' placeholder='Calories e.g 2000' onChange={(e)=>setcalories(e.target.value)}/>
        <select name="" onChange={(e)=>settimeFrame(e.target.value)} >
            <option value="day">day</option>
            <option value="week">week</option>
        </select>
        <button className='btn btn-success mx-2' onClick={() => generate()}> Generate Meal plan</button>
        {/* {mealData} */}
        {nutrient.calories}
    </div>
  )
}
