import { combineReducers } from "redux";
import users from './users';
import premium from "./premium";

const allReducers = combineReducers({
    usersReducer: users,
    premiumReducers: premium
})
export default allReducers