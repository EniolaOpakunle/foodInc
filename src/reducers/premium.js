// let realUser = [];
// // let fakeUser = [];
// localStorage.allUsers ? realUser = JSON.parse(localStorage.allUsers) : realUser = []
// const initState ={
//     firstname :'',
//     email: '',
//     allUsers: realUser,
//     newuserr: newUser
//     // user: {}
// }
// const premium = (state = initState, action) =>{
//     switch (action.type) {
//         case 'HOLD':
//             let newUser = {};
//             let found1 = state.allUsers.find(val => val.email == action.payload.email)
//         if (!found1) {
//             newUser.firstname = action.payload.firstname;
//             newUser.email = action.payload.email;
//             console.log(newuserr)
//         } else {
//             throw "Email already exist"
//         }
        
    
//         default:
//             return{
//                 ...state
//             }
//     }
// }
// export default premium