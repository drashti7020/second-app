import React from 'react'
import '../componant/Sectionfeatures.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../img/features.jpg'
import { FaReceipt } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";
const Sectionfeatures = () => {
    let Arr = [{icon :<FaReceipt />, title : "Est labore ad",para:"Consequuntu lorem ipsum aliquam quae harum pariatur laboris nisi ut aliquip"},
    {icon :<FaImages />, title :"Harum esse qui",para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"},
    {icon : <BiCubeAlt />, title :"Aut occaecati",para:"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"},
    {icon :<FaShieldAlt />, title : "Beatae veritatis",para:"Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"}]

  return (
    <>
    <div>
        <div id='sec3'>
            <section id='featuers' className='features'>
                <div className='container'>
                    <div className='row'>
                        <div className='image col-lg-6 aos-init aos-animate'>
                            <img src={images} alt=""  id='image'/>
                        </div>
                        <div className='image col-lg-6 aos-init aos-animate '>
                           <div className='icon-boxmt-lg-0 '>
                            {
                                  Arr.map((x) =>
                                  <div className=' h-100 p-3'>
                                     <div className='d-flex'>
                                     <i id='icon'>{x.icon}</i>
                                      <h3 id='h3'>{x.title}</h3>
                                     </div>
                                        <p id='p1'>{x.para}</p>
                                  </div>    )
                                  }
                            </div>
                           </div>
                        </div>
                    </div>
            </section>
                </div>
    </div>
    </>
  )
}

export default Sectionfeatures