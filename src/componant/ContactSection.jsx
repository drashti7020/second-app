import React from 'react'
import '../componant/ContactTeam.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
const ContactSection = () => {
    let contact = [{icon:<FaLocationDot />,h2:"Location:",para:"A108 Adam Street, New York, NY 535022"},{icon:<MdEmail />,h2:"Email:" ,para:"info@example.com"},{icon:<IoIosPhonePortrait />,h2:"Call:" ,para:"+1 5589 55488 55s"}]
  return (
    <>
    <div>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div>
          <iframe style={{border: "0" ,width: "100%" ,height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4 ">
            <div className="info ">
                {
                     contact.map((x)=>
                     {
                        return <div id='section' >
                     <i>{x.icon}</i>
                     <h4>{x.h2}</h4>
                     <p>{x.para}</p>
                   </div>
                     })
                }

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </div>
    </>
  )
}

export default ContactSection