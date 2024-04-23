import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componant/PortFolioSec6.css';

const PortFolioSec6 = () => {
    let araaw = [{lilist:"ALL"},{lilist:"APP"},{lilist:"CARD"},{lilist:"WEB"}]
  return (
    <>
    <div>
        <section id='portfolio' className='portfolio'>
            <div className='container '>
               <div className='Section-title ' id='section-title'>
                <h2 id='ptf'>Portfolio</h2>
                <p id='coptf'>Check our portfolio</p>
               </div> 
               <div className='row w-25 m-auto'>
                {
                    
                    araaw.map((x) =>
                     <div className='col-lg-3 d-flex justify-content-center' id='justify-content'>
                     <ul className='portfolio-flter' id='portfolio-flter'>
                      <li id='list'>{x.lilist}</li>
                     </ul>
                 </div>
)}
               </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default PortFolioSec6