import React, { useState } from 'react'
import './../componant/Section1gp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {  } from "react-icons/fa";
import { RiStore2Line } from "react-icons/ri";
import { RiBarChartBoxLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { RiPaintBrushLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

const Section1gp = () => {
    let [ary,SetAry] = useState([{icon : <RiStore2Line />, title :"lorem ipsum"},
    {icon : <RiBarChartBoxLine />, title :"Dolor Sitema"},
    {icon : <SlCalender />, title :"Sedare Perspiciatis"},
    {icon : <RiPaintBrushLine />, title :"Magni Dolores"},
    {icon : <FaDatabase />, title :"Nemos Enimade"}]) 
  return (
    <>
    <div>
        <div id='sec1' >
        <section id='hero' className='d-flex row align-items-center justify-content-center' >
            <div id="top" className='col-xl-6 col-lg-8  justify-content-center p-5'>
                <h1 id='heading' className='pt-5'>Powerful Digital Solutions With Gp <span>.</span></h1>
                <h2 id='sentence'>We are team of talented digital marketers</h2>
            </div>
           
           <div className='row gy-4 d-flex justify-content-center ' data-aos="fade-up" data-aos-delay='150'>
                {  
                    ary.map((x) =>
                    <div className='col-xl-2 col-md-4  m-2 p-4 text-white box' id='box'>
                    <div className='text-center'>
                        <i>{x.icon}</i>
                        <p>{x.title}</p>
                    </div>
                </div>
                    )
                }
           </div>
                </section>
        </div>
    </div>
    </>
  )
}

export default Section1gp