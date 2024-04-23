import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componant/FooterSection.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { FaChevronRight } from "react-icons/fa6";   

const FooterSection = () => {
    let arr1 = [{icon:<FaTwitterSquare />},{icon:<FaFacebookSquare />},{icon:<FaInstagramSquare />},
        {icon:<FaSkype />},{icon:<FaLinkedin />}]

         let arr2 =[{ic:<FaChevronRight />,des:"Home"},
                    {ic:<FaChevronRight />,des:"About"},
                    {ic:<FaChevronRight />,des:"Services"},
                    {ic:<FaChevronRight />,des:"Terms of services"},
                    {ic:<FaChevronRight />,des:"Privacy policy"}]

        let arr3 =[{ic:<FaChevronRight />,des:"Web Design"},
                    {ic:<FaChevronRight />,des:"Web Development"},
                    {ic:<FaChevronRight />,des:"Product Management"},
                    {ic:<FaChevronRight />,des:"Marketing"},
                    {ic:<FaChevronRight />,des:"Graphic Design"}]
  return (
    <>
    <div>
        <footer id='footer'>
            <div className='footer-top bg-dark text-white p-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <div className='footer-info' id='footer-info'>
                                <h4 id='fontgp'>GP <span className='text-warning' id='spandot'>.</span></h4>
                                <p>A108 Adam Street <br />NY 535022, USA <br /><br /><strong>Phone: </strong>+1 5589 55488 55  <br /><strong>Email: </strong> info@example.com <br /></p>
                                    <div className='social-links mt-3 d-flex '>
                                    {
                                            arr1.map((x)=>{
                                                return <div className='icon'>
                                                    <a href="#">
                                                        {x.icon}
                                                    </a>
                                                </div>
                                            })
                                        }
                                    </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                                    <h4 className='pt-3 pb-3'>Useful Links</h4>
                                    {
                                            arr2.map((y)=>{
                                                return <div >
                                                    <pre className='fs-6'><span className='text-warning'>{y.ic}</span> {y.des}</pre>
                                                </div>
                                            })
                                        }
                        </div>
                        <div className='col-lg-3 col-md-6'>
                        <h4 className='pt-3 pb-3'>Our Services</h4>
                                    {
                                            arr3.map((z)=>{
                                                return <div >
                                                <pre className='fs-6'><span className='text-warning'>{z.ic}</span> {z.des}</pre>
                                                </div>
                                            })
                                        }
                        </div>
                        <div className='col-lg-4 col-md-6 footer-newsletter '>
                            <h4 className='pt-3 pb-3'>Our Newsletter</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta officiis, quidem repellendus consectetur velit voluptatum vel nihil corrupti cupiditate quis exercitationem  Sapiente quibusdam veniam nisi, quam pariatur atque cupiditate inventore iure soluta possimus illum repellendus fuga voluptas </p>
                                <form action="" method='post'>
                                    <input type="email" name='email '/>
                                    <input type="submit"  value="Subscribe"/>
                                </form>
                        </div>
                     </div>
                </div>
            </div>
            <div className=' text-center p-3 bg-black text-white'>
                <div className='copyright pb-2'>
                © Copyright <strong> Gp. </strong>All Rights Reserved
                </div>
                <div className='credits'>
                    Designed by
                    <a href="" >  BootstrapMade</a>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default FooterSection