import React, { memo } from 'react'

const Childusecallback = () => {
    // console.log('child');
  return (
    <>
    <h3>child</h3>
    </>
  )
}

export default  memo(Childusecallback)