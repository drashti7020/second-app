import React, { useCallback, useState } from 'react'
import Childusecallback from './Childusecallback';

const Usecallback = () => {
    const [count, setCount] = useState(1)
    const fun = useCallback (() =>{

    },[]);

  return (
    <>
    <div className='text-center'>
        <h3>use callback function</h3>
        <h1>{count}</h1>
        <button className='btn btn-danger' onClick={() =>{setCount(count+1)}}>click</button>
        
    </div>
   <Childusecallback fun={fun}/>
    </>
  )
}

export default Usecallback