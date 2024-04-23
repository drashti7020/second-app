import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from './MainComp';

const LoginPage = () => {
    const { isLogin ,setIsLogin } = useContext(login);
    const register = useNavigate();
    const [ary , setAry] = useState(JSON.parse(localStorage.getItem('ary')) ||[]);
    const [key ,setkey] = useState(false)
    const blankObj = { email : '' , password : ''};

    const [obj ,setObj] = useState({...blankObj});
    const [data , setData] = useState({});
    
   
    const getInp = (e) => {
        obj[e.target.name] = e.target.value;
        setObj({...obj});
    }

    useEffect(() => {
     if(key && Object.keys(data)?.length == 0)
     {
        finalSubmit();
        console.log('data');
     }
    }, [data])

    const finalSubmit = () => {
         localStorage.setItem('isLogin' , JSON.stringify(true));
         setIsLogin(true);
         register('/reg');
    }

    const printData = () => {
        // ary.push(obj);
        setData(validation(obj));
        setkey(true);
        // setObj({...obj});
        // setAry([...ary])
        
    }

    const validation = (inpValue) =>{
        let err = {};
        if(inpValue.email == '')
        {
            err.email = 'This is required feild'
        
        }
        else{
            let person = ary.find((x) => x.email === inpValue.email);
            if(person) {
                localStorage.setItem('register' ,JSON.stringify(person));
               
            }
            else
            {
                err.email = 'invalid email'
            }
        }
        if(inpValue.password == '')
        {
            err.password = 'please enter the passsword'
        }
        return err;
    }
    

    

  return (
   <div className='d-flex flex-column mx-auto  '>
   <div className='w-50 text-center  mx-auto border border form mt-5'>
    <h3 className='pb-5 text-primary '>Validation</h3>
    <form action="">
    <div className='form-floating mb-3 w-100 p-2 '>
      <input type="email" className="form-control" name = 'email' id="floatingInput" value = {obj.email} onChange={getInp}></input>
      <label htmlFor="floatingInput">Email, phone number or username  </label>
          <div>
            {data.email && 
                <span>{data.email}</span>}
          </div>
    </div>
    <div className='form-floating mb-3 w-100 p-2'>
    <input type="password" className="form-control" name = "password" id="password"  value = {obj.password} onChange={getInp}></input>
    <label htmlFor="password">password</label>
        <div>
            {
                data.password && 
                <span>{data.password}</span>
            }
        </div>
    </div>
    <div className='w-100 p-2'>
        <button className='btn btn-primary w-100 p-2' type = 'button'  onClick={printData}>Log In</button>
    </div>
    </form>
    <hr />
    <h6 className='fw-lighter text-primary '>Forgot password?</h6>
   </div>
   <div className='w-50 mx-auto border p-3 text-center'>
     <span>Don't have an account? <Link to={'/signup'} className='text-primary text-decoration-none '>Sign up</Link></span>
   </div>
   </div>
  )
}

export default LoginPage