import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignupPage = () => {
    const blankobj = {profile : '' , email : '', fname : '' , lname : "" , password : '' , age : '' };
    const [obj , setObj] = useState({...blankobj});
    const [ary ,setAry] = useState(JSON.parse(localStorage.getItem('ary')) || []);
    const [error , setError] = useState({});
    const [key ,setKey] = useState(false);

    useEffect(() => {
        if(key && Object.keys(error)?.length == 0)
        {
           final();
        }
       }, [error]);

       const final = () => {
        ary?.push(obj)
        setAry([...ary]);
        localStorage.setItem('ary' , JSON.stringify(ary));
        setObj({...blankobj});
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const getInput = async(e) => {
        if(e.target.name == 'profile'){
            let a = e.target.files[0];
            a = await toBase64(a);
            obj.profile = a;
        }
        else{
            obj[e.target.name] = e.target.value;
        }
        setObj({...obj});
    }
    
    
   
  
    const validation = (inpValue) => {
        let err = {};
    
        if(inpValue.email == '')
        {
            err.email = 'please fill the feild'
        }
        else{
            let checkEmail = ary.find((x) => x.email == inpValue.email);
            if(checkEmail){
                err.email = 'email already exist';
            }
        }
        // if(inpValue.profile == '')
        // {
        //     err.profile = 'please fill the feild'
        // }
        if(inpValue.fname == '')
        {
            err.fname = 'please fill the feild'
        }
        if(inpValue.lname == '')
        {
            err.lname = 'please fill the feild'
        }
        if(inpValue.password == '')
        {
            err.password = 'please fill the feild'
        }
        if(inpValue.age == '')
        {
            err.age = 'please fill the feild'
        }
        return err;

    }
    const printData = () => { 
        setError(validation(obj));
        setKey(true);
       

  }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

  return (
    <div className='d-flex flex-column '>
        <form className='w-50 mx-auto border p-3 text-center mt-5 mb-3'>
            <h3 className='pb-1'>Validation</h3>
            <h6 className='fw-lighter pb-2'>sign up to see photos and details from your friends.</h6>
            <hr  className='pb-1'/>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="file" className="form-control " id="profile" name= 'profile'  onChange={getInput}></input>
                <label htmlFor="profile">profile </label>
                <div>
                    <img src={obj.profile} alt="" style={{height : '50px', width : '50px'}} />
                </div>
                {/* <div className='text-danger'>
                    {
                        error?.profile && 
                        <span>{error.profile}</span>
                    }
                </div> */}
               
             </div>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="email" className="form-control" id="floatingInput " name= 'email' value = {obj.email} onChange={getInput} ></input>
                <label htmlFor="floatingInput">Email, phone number or username  </label>
                <div className='text-danger'>
                    {
                        error?.email && 
                        <span>{error.email}</span>
                    }
                </div>
             </div>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="text" className="form-control"  name= 'fname' value = {obj.fname} onChange={getInput}></input>
                <label htmlFor="fname">First Name</label>
                <div className='text-danger'>
                    {
                        error?.fname && 
                        <span>{error.fname}</span>
                    }
                </div>
             </div>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="text" className="form-control" name= 'lname' value = {obj.lname} onChange={getInput}></input>
                <label htmlFor="lname">Last Name</label>
                <div className='text-danger'>
                    {
                        error?.lname && 
                        <span>{error.lname}</span>
                    }
                </div>
             </div>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="password" className="form-control"   name= 'password' value = {obj.password} onChange={getInput} ></input>
                <label htmlFor="password">password</label>
                <div className='text-danger'>
                    {
                        error?.password && 
                        <span>{error.password}</span>
                    }
                </div>
             </div>
            <div className='form-floating mb-3 w-100 p-2'>
                <input type="number" className="form-control"  name= 'age' value = {obj.age} onChange={getInput}></input>
                <label htmlFor="age">Age</label>
                <div className='text-danger'>
                    {
                        error?.age && 
                        <span>{error.age}</span>
                    }
                </div>
             </div>
             <div className='w-100 p-2'>
                <button className = 'btn btn-primary w-100 p-2' onClick={printData} type='button'>Sign up</button>
             </div>

        </form>
        <div className='w-50 mx-auto border p-3 text-center  mb-3'>
        <span>Don't have an account? <Link to={'/login'} className='text-primary text-decoration-none '>Log in</Link></span>
        </div>
    </div>
  )
}

export default SignupPage