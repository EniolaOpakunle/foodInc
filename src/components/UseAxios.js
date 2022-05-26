import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function UseAxios(url, lon) {
  const [onlineData, setonlineData] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [error, seterror] = useState(null)
    // const [weather, setweather] = useState([])
    useEffect(() =>{
    // console.log("I was called")
    axios.get(url)
    .then((response) =>{
        setisLoading(false)
        setonlineData(response.data)
        // console.log(response.data)

    }).catch((err)=>{
        setisLoading(false)
        seterror(err.message)
        console.log(err.message)
    }, [lon])
   
})
 return {isLoading, error, onlineData};

}
  

