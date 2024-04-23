import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componant/AboutSection.css'
import aboutimages from '../img/about.jpg'
import { RiCheckDoubleLine } from "react-icons/ri";

const AboutSection = () => {
    let About = [{icon: <RiCheckDoubleLine />, aboutpara:"Ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {icon: <RiCheckDoubleLine />, aboutpara:"Duis aute irure dolor in reprehenderit in voluptate velit."},
    {icon: <RiCheckDoubleLine />, aboutpara:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."},{icon: <RiCheckDoubleLine />, aboutpara:"Ullamco laboris nisi ut aliquip ex ea commodo consequat."}]
  return (
    <>
    <div>
        <section className='about' id='about'>
        
                <div className='container'>
                <section id='About-css'>
                 <div className='section title'>
                      <h2 id='head' className='pt-5'>About Us</h2>
                         <p id='head2'>check our about</p>
                           </div>
                          </section>
                         <div className='row' id='row'>
                        <div className='col-lg-6 order-1 order-lg-2 aos-init aos-animate'>
                            <img src={aboutimages} alt=""  id='img-fluid '/>
                        </div>
                        <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate'>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className='fst-italic'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            {
                                     About.map((x) =>
                                     <ul>
                                        <li><i>{x.icon}</i>{x.aboutpara}</li>
                                     </ul>
                                       )
                            }
                            <p className='fst-italic'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis optio, autem tempore magnam fugiat cupiditate .
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
    </>
  )
}

export default AboutSection