import React from 'react'
// import UseAxios from './UseAxios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UseAxios from './UseAxios';

export default function Recipe() {
    const navigate = useNavigate();
    const [query, setquery] = useState('')
    const [diet, setdiet] = useState('')
    const [intolerance, setintolerance] = useState('')
    const [ingredients, setingredients] = useState('')
    const [exclude, setexclude] = useState('')
    const [info, setinfo] = useState([])
    const [result, setresult] = useState([])
    const number = 10
    const instruction = true
    const addRecipeIformation= true;
    const addRecipeNutrition = true;
    const searchRecipe = () =>{
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=832dbaf2e32f43aca7d47d41cab98a3b&query=${query}&number=10&diet=${diet}&instructionsRequired=${instruction}&addRecipeInformation=${addRecipeIformation}&addRecipeInformation=${addRecipeNutrition}&number=${number}`
      ).then((response) =>response.json())
        .then((data) =>{
            let re = data
            setinfo(re)
            setresult(re.results)
            // setresult(info.results)
            // console.log(result)
        }).catch(()=>{
            console.log('error')
        })
    }
    // let result = info.results
  
    console.log(result)
    // &intolerances=${intolerance}&includeIngredients=${ingredients}&excludeIngredients=${exclude
    // let {onlineData, error, loading} = UseAxios();
  return (
    < >
    <div className='container-fluid'>    
      <h1 className='my-3'>Food Recipe</h1>
      <div>
        <label htmlFor="">Query i.e name of recipe</label>
        <input 
        type="text" 
        className='form-control'
        onChange={(e)=>setquery(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="">Diet e.g vegetarian</label>
        <input 
        type="text" 
        className='form-control'
        onChange={(e)=>setdiet(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">IncludeIngredients seperated by comma</label>
        <input 
        type="text" 
        className='form-control'
        onChange={(e)=>setingredients(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">ExcludeIngredients seperated by comma</label>
        <input 
        type="text" 
        className='form-control'
        onChange={(e)=>setexclude(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Intolerances seperated by comma</label>
        <input 
        type="text" 
        className='form-control'
        onChange={(e)=>setintolerance(e.target.value)} />
      </div>

      <button className='btn btn-success mx-2 my-2' onClick={searchRecipe}> Search Recipe</button>
     </div> 
     <div>
       {result.map((val, index) =>(
         <div>{val.vegetarian}</div>
       ))}
     </div>

    </>
  )
}
