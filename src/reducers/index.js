import { combineReducers } from "redux";
import users from './users';
// import premium from "./premium";

const allReducers = combineReducers({
    usersReducer: users
})
export default allReducers