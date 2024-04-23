import React, { createContext, useState } from 'react'
import { BrowserRouter , Route, Routes ,Navigate} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Error from './Error';
import Registraion from './Registraion';


export const login = createContext();
const MainComp = () => {
  const [isLogin , setIsLogin] = useState(JSON.parse(localStorage.getItem('islogin')) || false);
  return (
    <>
    
    <login.Provider value={{isLogin , setIsLogin}}>
      <BrowserRouter>
      <Routes>
              {
                isLogin != true ? (
                  <>
                   <Route path='/' element = {<Navigate to={'/login'}/>}></Route>
                   <Route path='/login' element = {<LoginPage/>}></Route>
                   <Route path='/signup' element = {<SignupPage/>}></Route>
                   <Route path='*' element = {<Error/>}></Route>
                  </>
                ) : (  
                  
                  <>  
                  <Route path='/' element = {<Navigate to = {'/reg'}/>}></Route>
                  <Route path='/reg' element = {<Registraion/>}></Route>
                  <Route path='*' element = {<Error/>}></Route>
                  </>   
                )
              }
          </Routes>
      </BrowserRouter>
    </login.Provider>
    
    </>
  )
}

export default MainComp