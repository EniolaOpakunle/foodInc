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
const hold = (values) =>{
    return{
        type: 'HOLD',
        payload: values
    }
}
export {register, verify, logout, hold }