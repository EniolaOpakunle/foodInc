import React from 'react';
import Navbar from './Navbar';
import background from '../images/diet.webp'
import '../App.css'

export default function 
() {
  return (
    <>
    <div>
      <div className=" w-100 general">
        <Navbar/>
        <div className=' m-auto' >
          <h4 className=' mainText' >healthy solution to food problems</h4>
          <p className='w-50 mx-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic magnam provident deserunt possimus iure   atque sit. Dicta iusto dolore architecto exercitationem reprehenderit. Reprehenderit suscipit itaque, excepturi eius voluptatibus   libero aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab dolores illum atque ducimus est quasi animi   maiores odit incidunt impedit obcaecati esse nobis aut, aspernatur fugiat perspiciatis! Quibusdam, velit. Lorem ipsum dolor sit   amet consectetur adipisicing elit. Ab sequi reiciendis totam pariatur eaque esse deleniti tenetur assumenda asperiores optio   consectetur corrupti consequatur provident molestiae ad est, dolore autem consequuntur?</p>
        </div>
      </div>
      <div>
        <h1 className='text-center my-5'>our services</h1>
        <div className='d-flex'>
          <div className='service-div'> 
          <div id='service1'></div>
            <h4>Recipe Search</h4>
          </div>
          <div className='service-div text-white'>
            <h4>Recipe Search</h4>
          </div>
          <div className='service-div text-white'>
            <h4>Recipe Search</h4>
          </div>
          <div className='service-div text-white'>
            <h4>Recipe Search</h4>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
