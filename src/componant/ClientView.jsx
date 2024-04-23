import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../img/clients/client-1.png';
import img2 from '../img/clients/client-2.png';
import img3 from '../img/clients/client-3.png';
import img4 from '../img/clients/client-4.png';
import img5 from '../img/clients/client-5.png';
import img6 from '../img/clients/client-6.png';
import img7 from '../img/clients/client-7.png';
import img8 from '../img/clients/client-8.png';

const ClientView = () => {

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      let ImageArr = [{image:img1},{image:img2},{image:img3},{image:img4},
        {image:img5},{image:img6},{image:img7},{image:img8}]
  return (
    <>

<div className="slider-container">
     
      <div 
        style={{
          
        }}
      >
        <Slider {...settings}>

          {
           ImageArr.map((x,i)=>{
            return <div className='imgset'>
              <img src={x.image} alt="" />
            </div>
           }) 
          }
        
        </Slider>
      </div>
    </div>
    </>
  )
}

export default ClientView