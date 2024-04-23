import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componant/CountSection.css';
import { FaRegSmile } from "react-icons/fa";
import { BsJournalRichtext } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import countimage from '../img/counts-img.jpg';

const CountSection = () => {
    let CountSec = [{icon :<FaRegSmile />,span1:"65",desc:"Happy Clients consequuntur voluptas nostrum aliquid ipsam architecto ut."}
    ,{icon:<BsJournalRichtext />,span1:"85",desc:"Projects adipisci atque cum quia aspernatur totam laudantium et quia dere tan"}
    ,{icon:<FaRegClock />,span1:"35",desc:"Years of experience aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel"}
    ]
    // console.log(CountSec);
  return (
    <>
    <div>
        <section id='counts' className='counts' >
            <div className='container aos-init aos-animate'>
                <div className='row no-gutters d-flex'>
                    <div className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate'>
                        <img src={countimage} alt="" />
                    </div>
                    <div className='col-xl-7  ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate'>
                        <div className='content d-flex flex-column justify-content-center'>
                            <h3>Voluptatem dignissimos provident quasi</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit </p>
                            <div className='row'>
                                        {
                                            CountSec.map((z) =>
                                <div className='col-md-7 d-flex   align-items-md-stretch'>
                                                <div className='count-box d-flex'>
                                               <div>
                                               <i>{z.icon}</i>
                                                <h2>{z.span1}</h2>
                                                <p>{z.desc}</p>
                                               </div>
                                        </div>
                                                </div>)
                                        }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default CountSection