import React from 'react'
import img1 from '../img/amazon/71q-01HbzXL._SY879_.jpg'
import img2 from '../img/amazon/51fl7rl6z1L._SY879_.jpg'
import img3 from '../img/amazon/61Kb7Ti6ALL._SY879_.jpg'
import img4 from '../img/amazon/61n4hWdjpWL._SX679_.jpg'
import img5 from '../img/amazon/71pb8QR7ZLL._SY879_.jpg'
import { FaDollarSign } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TaskAmazon = () => {
  return (
    <>
    <h1 className='text-center text-warning'>Women's Clothing</h1>
      <div className='d-flex w-100'>
        
        <div class="card" style={{width: "19rem"}}>
  <img src={img1} class="card-img-top" alt="..." style={{height :"350px"}}/>
  <div class="card-body">
    <h3><i><FaDollarSign /></i>236</h3>
    <h5><FaStar className='text-warning' /><FaStar className='text-warning' /><FaRegStar /><FaRegStar /><FaRegStar /></h5>
    <h5 class="card-title">DHRUVI TRENDZ</h5>
    <p class="card-text">Women Regular Fit Rayon Shirt Loose Fit Full Sleeve.</p>
    <a href="#" class="btn btn-warning">Add to Cart</a>
  </div>
</div>

<div class="card" style={{width: "19rem" }}>
  <img src={img2} class="card-img-top" alt="..." style={{height :"350px"}}/>
  <div class="card-body">
  <h3><i><FaDollarSign /></i>468</h3>
  <h5><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaRegStar /><FaRegStar /></h5>
    <h5 class="card-title">BE SAVAGE</h5>
    <p class="card-text">Women's Cotton Hooded Neck Hoodies</p>
    <a href="#" class="btn btn-warning">Add to Cart</a>
  </div>
</div>

<div class="card" style={{width: "19rem" }}>
  <img src ={img3} class="card-img-top" alt="..." style={{height :"350px"}}/>
  <div class="card-body">
  <h3><i><FaDollarSign /></i>349</h3>
  <h5><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaRegStar /><FaRegStar /></h5>
    <h5 class="card-title">LEOTUDE</h5>
    <p class="card-text">Loose Fit Full Sleeve with Drop Shoulder Round Neck Women's</p>
    <a href="#" class="btn btn-warning">Add to Cart</a>
  </div>
</div>

<div class="card" style={{width: "19rem"}}>
  <img src={img4} class="card-img-top" alt="..." style={{height :"350px"}} />
  <div class="card-body">
  <h3><i><FaDollarSign /></i>542</h3>
  <h5><FaStar className='text-warning' /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></h5>
    <h5 class="card-title">Sleepynuts</h5>
    <p class="card-text">Women Full Sleeve Round Neck Fleece Sweatshirt.</p>
    <a href="#" class="btn btn-warning">Add to Cart</a>
  </div>
</div>

<div class="card" style={{width: "19rem" }}>
  <img src={img5} class="card-img-top" alt="..." style={{height :"350px"}} />
  <div class="card-body">
  <h3><i><FaDollarSign /></i>538</h3>
  <h5><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /></h5>
    <h5 class="card-title">Amazon Brand - Symbol</h5>
    <p class="card-text">Women's Polyester Standard Length Jacket.</p>
    <a href="#" class="btn btn-warning">Add to Cart</a>
  </div>
</div>
    </div>
    </>
  )
}

export default TaskAmazon