const register = (data) =>{
 return{
     type: 'REGISTER',
     payload: data
 }
}
const verify = (data) =>{
    return{
        type: 'VERIFY',
        payload: data
    }
} 
const logout = () =>{
    return{
        type: 'LOGOUT'
    }
}
const hold = () =>{
    return{
        type: 'HOLD'
    }
}
export {register, verify, logout, hold }