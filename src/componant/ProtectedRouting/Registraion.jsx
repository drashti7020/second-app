import React, { useContext, useState } from 'react'
import { login } from './MainComp';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';




const Registraion = () => {
    const register = useNavigate();
    const blankobj = {profile :"",email : "",fname : '' ,lname : '' ,password :'',age :'' };
    const {isLogin , setIsLogin} = useContext(login);
    console.log(login);
    let detail = JSON.parse(localStorage.getItem('register')) || [];
    console.log(detail.fname);
    const deleteData = () => {
      localStorage.removeItem('register');
      localStorage.removeItem('isLogin');
      setIsLogin(false);
      register('/');
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "log Out!",
            text: "Your file has been logOUt.",
            icon: "success"
          });
        }
      });
    }
    
    
    
   
  return (
    <>
     <div className='bg-success-subtle w-75 text-center border p-3 '>
        <h3 className='pb-3'>Log in</h3>
        <div className='text-start ps-5 mx-auto text-primary '>
            <h3 className='border p-2'>profile :<img src={detail.profile} alt="" /></h3>
            <div className='w-100  mx-auto '>
                <h3 className='border p-2'>Email : {detail.email} </h3>
                <h3 className='border p-2'>first name : {detail.fname} </h3>
                <h3 className='border p-2'>Last name : {detail.lname} </h3>
                <h3 className='border p-2'>Password : {detail.password} </h3>
                <h3 className='border p-2'>Age : {detail.age} </h3>
            </div>
            <div className='mx-auto'>
              <button className='btn btn-success btn-block ' onClick={deleteData}>LogOut</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default Registraion