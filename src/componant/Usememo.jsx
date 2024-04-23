import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(1);

    const increment = useMemo(() =>{
        console.log('called');
    },[]);
  return (
    <>
    <div className='text-center'>
        <h1>{increment}</h1>

        <h2>{count}</h2>
        <button className='btn btn-success' onClick={() => setCount(count+1)}>click</button>
    </div>
    </>
  )
}

export default Usememo