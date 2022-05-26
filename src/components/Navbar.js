import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <>
    <nav>
    <nav className="navbar navbar-expand-lg navbar-light  p-fixed ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FoodInc</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to={'/'} className='nav-link active text-light'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link 1 text-light link-object' to='/pricing'>Pricing</Link>
          {/* <a class="nav-link" href="#">Features</a> */}
        </li>
        <li className="nav-item">
          <Link className='nav-link link-object ' to={'/signup'}></Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link  1 text-light' to={'/signin'}>SignIn</Link>
          {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </nav>
    </>
  )
}
