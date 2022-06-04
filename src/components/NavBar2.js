import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar2() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to={'/general1234'} className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/pp1111'>Personal Profile</Link>
        </li>
        <li className="nav-item">
          {/* <Link className='nav-link' to={'/signup'}></Link> */}
        </li>
        <li className="nav-item">
          <Link className='nav-link' to={'/logout0000'}>log Out</Link>
          {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
    </div>
    aggregateLikes: 2
analyzedInstructions: [{…}]
cheap: false
cookingMinutes: -1
creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
cuisines: []
dairyFree: false
diets: (2) ['gluten free', 'lacto ovo vegetarian']
dishTypes: ['dessert']
gaps: "no"
glutenFree: true
healthScore: 6
id: 658276
image: "https://spoonacular.com/recipeImages/658276-312x231.jpg"
imageType: "jpg"
license: "CC BY 3.0"
lowFodmap: false
occasions: []
openLicense: -1
preparationMinutes: -1
pricePerServing: 61.47
readyInMinutes: 45
servings: 4
sourceName: "Foodista"
sourceUrl: "https://www.foodista.com/recipe/C75THTG5/rice-pudding"
spoonacularSourceUrl: "https://spoonacular.com/rice-pudding-658276"
summary: "If you have around <b>about 45 minutes</b> to spend in the kitchen, Rice Pudding might be a super <b>gluten free and lacto ovo vegetarian</b> recipe to try. One serving contains <b>407 calories</b>, <b>12g of protein</b>, and <b>10g of fat</b>. This recipe serves 4. For <b>61 cents per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. A mixture of short grain rice, water, milk, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 2 foodies and cooks. It works well as a dessert. It is brought to you by Foodista. Overall, this recipe earns a <b>not so awesome spoonacular score of 36%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/left-over-rice-make-rice-pudding-532769\">Left over rice? Make Rice pudding</a>, <a href=\"https://spoonacular.com/recipes/rice-kheer-rice-pudding-600368\">Rice Kheer (Rice Pudding)</a>, and <a href=\"https://spoonacular.com/recipes/brown-rice-rice-pudding-79963\">Brown Rice Rice Pudding</a>."
sustainable: false
title: "Rice Pudding"
vegan: false
vegetarian: true
veryHealthy: false
veryPopular: false
weightWatcherSmartPoints: 17

  </div>
</nav>
    </>
  )
}
