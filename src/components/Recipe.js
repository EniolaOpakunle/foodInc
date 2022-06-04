import React from 'react'
// import UseAxios from './UseAxios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UseAxios from './UseAxios';
import background from '../images/diet.webp'

export default function Recipe() {
    const navigate = useNavigate();
    const [query, setquery] = useState('')
    const [diet, setdiet] = useState('')
    const [intolerance, setintolerance] = useState('')
    const [Cuisines, setCuisines] = useState('')
    const [MealTypes, setMealTypes] = useState('')
    const [info, setinfo] = useState([])
    const [result, setresult] = useState([])
    const [index, setindex] = useState('')
    const number = 10
    const instruction = true
    const addRecipeIformation= true;
    const addRecipeNutrition = true;
    const searchRecipe = () =>{
      console.log(intolerance, MealTypes, Cuisines, diet)
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=832dbaf2e32f43aca7d47d41cab98a3b&query=${query}&number=10&diet=${diet}&instructionsRequired=${instruction}&addRecipeInformation=${addRecipeIformation}&type=${MealTypes}&intolerances=${intolerance}&cuisine=${Cuisines}&addRecipeInformation=${addRecipeNutrition}&number=${number}`
      ).then((response) =>response.json())
        .then((data) =>{
            let re = data
            setinfo(re)
            setresult(re.results)
        }).catch(()=>{
            console.log('error')
        })
    }
    const getFullDetails =(indd) =>{
      console.log(indd
        )
    }
    console.log(result)
  return (
    < >
    <div className='position-relative'>
      <nav className="navbar navbar-light" id='recipeNav'>
        <span className="navbar-brand mb-0 h1">FoodInc</span>
      </nav>  
      <div id='searchBackground'>
        <h4 className='text-center' id='searchH4'>Search for your favourite recipe with ease</h4>
        <p className='justify-content-center my-3 w-75 m-auto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat consequatur recusandae dignissimos explicabo fuga, repellendus eaque ipsa eligendi accusamus dolore doloribus adipisci neque sapiente iure! Sunt omnis quisquam ad.</p>
        <div className='d-flex justify-content-center'>
          <input 
          type="text" 
          className='form-control'
          onChange={(e)=>setquery(e.target.value)}
          placeholder='name of recipe'
          style={{width: '700px'}} 
          id='searchInput' />
          <button className=' mx-2 my-2 searchBtn' onClick={searchRecipe} > Search Recipe</button>
        </div>
        <div className='justify-content-center d-flex'>
          <label htmlFor="" className='mx-2'>Diet</label>
          <select name="" id="" onChange={(e)=>setdiet(e.target.value)}>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Lacto-vegetarian">Lacto-vegetarian</option>
            <option value="ovo-vegetarian">ovo-vegetarian</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Ketogenic">Whole30</option>
            <option value="primal">primal</option>
            <option value="paleo">paleo</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Gluten Free">Gluten Free</option>
          </select>
          <label htmlFor="" className='mx-2'>Cuisines</label>
          <select name="" id="" onChange={(e)=>setCuisines(e.target.value)}>
            <option value="African">African</option>
            <option value="African">American</option>
            <option value="British">British</option>
            <option value="cajun">cajun</option>
            <option value="caribbean">caribbean</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern European">Eastern European</option>
            <option value="European">European</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Jewish">Jewish</option>
            <option value="Korean">Korean</option>
            <option value="Latin American">Latin American</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="Southern">Southern</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
          <label htmlFor="" className='mx-2'>Meal Types</label>
          <select name="" id="" onChange={(e)=>setMealTypes(e.target.value)}>
            <option value="Main course">Main course</option>
            <option value="Side dish">Side dish</option>
            <option value="Desert">Desert</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Salad">Salad</option>
            <option value="Bread">Bread</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Soup">Soup</option>
            <option value="Beverage">Beverage</option>
            <option value="Sauce">Sauce</option>
            <option value="Marinade">Marinade</option>
            <option value="Fingerfood">Fingerfood</option>
            <option value="Snack">Snack</option>
            <option value="Drink">Drink</option>
          </select>
          <label htmlFor="" className='mx-2'>Intolerances</label>
          <select name="" id="" onChange={(e)=>setintolerance(e.target.value)}>
            <option value="Diary">Diary</option>
            <option value="Egg">Egg</option>
            <option value="Glutten">Glutten</option>
            <option value="Grain">Grain</option>
            <option value="Peanut">Peanut</option>
            <option value="Seafood">Seafood</option>
            <option value="Sesame">Sesame</option>
            <option value="Shellfish">Shellfish</option>
            <option value="Soy">Soy</option>
            <option value="sulfite">sulfite</option>
            <option value="Tree nut">Tree nut</option>
            <option value="Wheat">Wheat</option>
          </select>
        </div>
      </div>
     <div className='row position-absolute'>
       {result.map((val, ind) =>(
         <div key={ind} className='col-3 card m-1' style={{width: '18rem'}}>
           <img src={val.image} alt="card image cap" style={{width: '16rem'}} className='card-img-top'/>
           <div className='card-body'>
              <p className='card-title'>{val.title}</p>
              <p className='card-subtitle mb-2 text-muted'>{val.dishTypes}</p>
              <button onClick={()=>getFullDetails(ind)} className='searchBtn'>View full details</button>
           </div>
           </div>
       ))}
     </div> 
    </div>
    </>
  )
}
