import React from 'react'
import NavBar2 from './NavBar2'
import timetable from '../images/timetable.webp'
import recipe from '../images/recipe.webp'
import diet from '../images/diet.webp'
import background1 from '../images/background1.jpg'
import background3 from '../images/background3.webp'
import background2 from '../images/background2.jpg'
import { Link } from 'react-router-dom'
import { useNavigate, Route, Routes } from 'react-router-dom';
export default function General() {
  const navigate = useNavigate();
  return (
    <>
    {/* <Routes>
      <Route/>
    </Routes> */}
      <NavBar2/>
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
     <ol className="carousel-indicators">
       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img className="d-block w-100 h-25" src={background2} alt="First slide"/>
       </div>
       <div className="carousel-item">
         <img className="d-block w-100" src="..." alt="Second slide"/>
       </div>
       <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide"/>
       </div>
     </div>
     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
     </a>
   </div>
      <div className='d-flex m-auto'>
      <div className="card mx-5" style={{width: '15rem'}}>
        <img src={timetable} className="card-img-top"/>
       <div className="card-body">
        <h5 className="card-title">Weekly meal planner</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a>  */}
        <Link to={'/mealplan'} className= "btn btn-primary"> set timetable</Link>
        
       </div>
       </div>
       <div className="card mx-5" style={{width: '15rem'}}>
        <img src={recipe} className="card-img-top"/>
       <div className="card-body">
        <h5 className="card-title">Food recipes</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={'/recipe'} className ='btn btn-info'>Search Recipe</Link>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a>  */}
       </div>
       </div>
       <div className="card mx-5" style={{width: '15rem'}}>
        <img src={diet} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">food diet</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={'/diet'} className={'btn btn-success'}>Food diet</Link>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a>  */}
       </div>
       </div>

      </div>
      

    </>
  )
}
