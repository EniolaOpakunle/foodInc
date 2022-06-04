import React from 'react'
import { useState, useEffect } from 'react';
import UseAxios from './UseAxios';

export default function Weather() {
    const [longitude, setlongitude] = useState(0)
    const [latitude, setlatitude] = useState(0)
    const apikey = 'ca60239bd64a8dd45b1c2b9084c16b14';
    const url2 = (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
    let {isLoading, error, onlineData} = UseAxios(url2, longitude);
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(res =>{
          setlatitude(res.coords.latitude);
          setlongitude(res.coords.longitude)
          // console.log(res.coords);
      })
    }, [longitude]);
    // console.log(onlineData.main)
    // console.log(onlineData )
  return (
    <div>
        {isLoading && <div>...is Loading</div>}
        <div className='text-danger display-4'>{onlineData.base}</div>
        {error && <div className='text-danger alert-danger display-5'> {error} </div>}
    </div>
  )
}
