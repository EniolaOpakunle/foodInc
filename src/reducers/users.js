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
    waitingUser: {},
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
        }
         else {
            throw "Email already exist"
        }
        
        return {
            ...state,
            allUsers: [...state.allUsers, newUser]


        }
    case 'VERIFY' :
        let found2 = state.allUsers.find((val, index) => (val.email == action.payload.email && val.password == action.payload.password))
        if (!found2){
            throw "Invalid email or password";
        }else{
            localStorage.currentUser = JSON.stringify(found2.id);
            return {
                ...state,
                checkStatus : true,
            }

        }
    case 'HOLD' :
        let premiumUser = {}
        let found = state.allUsers.find((val => val.email == action.payload.email))
        if(!found){
            console.log(action.payload);
            premiumUser.firstname = action.payload.firstname
            premiumUser.lastname = action.payload.lastname
            premiumUser.username = action.payload.username;
            premiumUser.password = action.payload.password;
            premiumUser.challenge = action.payload.challenge;
            premiumUser.email = action.payload.email;
            premiumUser.version =action.payload.version;
            premiumUser.id = realUser.length
            return {
                ...state,
                waitingUser: premiumUser
            }

        }else{
            throw 'Email already exist'
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