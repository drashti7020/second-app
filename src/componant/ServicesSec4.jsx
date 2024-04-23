import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componant/ServicesSec4.css';
import { FaDribbble } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { RiSlideshow3Line } from "react-icons/ri";
import { FaArchway } from "react-icons/fa";

const ServicesSec4 = () => {
    let ServiArry = [{icon:<FaDribbble />,title:"Lorem Ipsum",discription:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"},
    {icon:<FaFileAlt />,title:"Sed ut perspiciatis",discription:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"},
    {icon:<IoIosSpeedometer />,title:"Magni Dolores",discription:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"},
    {icon:<IoEarth />,title:"Nemo Enim",discription:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"},
    {icon:<RiSlideshow3Line />,title:"Dele cardo",discription:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"},
    {icon:<FaArchway />,title:"Divera don",discription:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"}]
  return (
    <>
     <div>
     <section id='sec4'>
     <div className='container pt-5'>
      <div className='section title'>
        <h2 id='head'>Servies</h2>
        <p id='head2'>check our services</p>
      </div>
        <div className='row g-3 '>
          {
              ServiArry.map((x)=>{
               return <div className='col-4 p-3'>
                  <div className='text-center p-5 icn-bx' id='part-box'>
                    <span className=' rounded position-relative rounded-2 icn ' id='icon'>{x.icon}</span>
                    <h2 className='fw-bold pt-3' id='title'>{x.title}</h2>
                    <p className='pt-3' id='para'>{x.discription}</p>
                  </div>
                </div>
              })
          }
        </div>
    </div>
     </section>
     </div>
    </>
  )
}

export default ServicesSec4