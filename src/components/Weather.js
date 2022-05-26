import React from 'react'
import { useState, useEffect } from 'react';
import UseAxios from './UseAxios';

export default function Weather() {
    const [longitude, setlongitude] = useState('')
    const [latitude, setlatitude] = useState('')
    const apikey = 'ca60239bd64a8dd45b1c2b9084c16b14';
    const url2 = (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
    let {isLoading, error, onlineData} = UseAxios(url2, longitude)
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(res =>{
          setlatitude(res.coords.latitude);
          setlongitude(res.coords.longitude)
          console.log(res)
      })
    }, [longitude])
  return (
    <div>
        {isLoading && <div>...is Loading</div>}
        {onlineData.temp}
        {!error && <div> {error} </div>}
    </div>
  )
}
