import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

const Error = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
  return (
    <div className='main p-5 text-center'>
     <div className="box">
     <h1 className='text-danger'>Error</h1>
      <h3 className='my-3'>404 page not found !</h3>
      <Link to = {'/'}  className='btn btn-outline-danger text-center '>Back to Login</Link>
     </div>
    </div>
  )
}

export default Error