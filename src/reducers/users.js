let realUser = [];
// let fakeUser = [];
localStorage.allUsers ? realUser = JSON.parse(localStorage.allUsers) : realUser = []
// localStorage.currentUser ? fakeUser = JSON.parse(localStorage.currentUser) : fakeUser = []
const initState = {
    firstname :'',
    lastname :'', 
    username : '',
    password :'',
    challenge :'',
    email :'',
    version:'',
    allUsers: realUser,
    checkStatus : false,
    id : '',
    // currentUser : fakeUser
}
const users = ( state = initState, action) =>{
switch (action.type) {
    case 'REGISTER' :
        let newUser = {};
        let found1 = state.allUsers.find(val => val.email == action.payload.email)
        if (!found1) {
            newUser.firstname = action.payload.firstname;
            newUser.lastname = action.payload.lastname;
            newUser.username = action.payload.username;
            newUser.password = action.payload.password;
            newUser.challenge = action.payload.challenge;
            newUser.email = action.payload.email;
            newUser.version =action.payload.version;
            newUser.id = realUser.length
            localStorage.allUsers = JSON.stringify([...state.allUsers, newUser])
            console.log(state.allUsers)
        } else {
            throw "Email already exist"
        }
        
        return {
            ...state,
            allUsers: [...state.allUsers, newUser]


        }
    case 'VERIFY' :
        let found2 = state.allUsers.find((val, index) => (val.email == action.payload.email && val.password == action.payload.password))
        if (!found2){
            throw "Invalid email or password"
        }else{
            console.log(found2)
            state.checkStatus = true;
            // state.index = 2;
            console.log(state.checkStatus)
            // localStorage.currentUser = JSON.stringify([found2.id])
            localStorage.currentUser = found2.id
            console.log(found2.id)
            // checkStatus = true;

        }
    case 'LOGOUT' :
        state.checkStatus = false;
        console.log(state.checkStatus)
    default:
        return {
            ...state
        }
}
}

export default users;