import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { useState } from 'react';
import Logout from './components/Logout';
import Recipe from './components/Recipe';
import Diet from './components/Diet';
import MealPlan from './components/MealPlan';
import Pricing from './components/Pricing';
import Tips from './components/Tips';
import Dashboard from './components/Dashboard';
import Setting from './components/Setting';
import PaystackPage from './components/PaystackPage';

function App() {
  // const [allUsers, setallUsers] = useState([])
  // const addNewUser = (values) =>{
  //   let newAllUsers = allUsers;
  //   let found = newAllUsers.find(val => val.email === values.email);
  //   if(!found){
  //     setallUsers
  //   }
  // }
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/recipe' element={<Recipe/>}/>
      <Route path='/recipe/*' element={<Recipe/>}/>
      <Route path='/diet' element={<Diet/>}/>
      <Route path='/mealplan' element ={<MealPlan/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      {/* <Route path='/tips' element={<Tips/>}/> */}
      <Route path='/settings' element={<Setting/>}/>
      <Route path='/logout0000' element={<Logout/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/paymentpage' element={<PaystackPage/>}/>
    </Routes>
    </>
  );
}

export default App;
