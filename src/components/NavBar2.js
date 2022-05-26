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
  </div>
</nav>
    </>
  )
}
