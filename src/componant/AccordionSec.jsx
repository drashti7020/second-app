import React from 'react'
import '../componant/AccordionSec.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AccordionSec = () => {
    let ary = [
        {
        title:"Non consectetur a erat nam at lectus urna duis?",
        desc:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        },
        {
            title:"Feugiat scelerisque varius morbi enim nunc?",
            desc:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            },
            {
                title:"Dolor sit amet consectetur adipiscing elit?",
                desc:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
                },
                {
                  title:"Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
                  desc:"Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in."
                  },
  
]
  return (
    <>
    
    <div className='container pb-5'>
      <div>
        <h2 className='p-3'> -- Accordion Section --</h2>
      </div>
    <div className="accordion accordion-flush p-3" id="accordionFlushExample">

 {
    ary?.map((x,i)=>{
        return  <div className="accordion-item p-3">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${i}`} aria-expanded="false" aria-controls="flush-collapseOne">
            {x?.title}
          </button>
        </h2>
        <div id={`flush-collapseOne${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            {x?.desc}
          </div>
        </div>
      </div>
    })
 }
</div>
</div>
    </>
  )
}

export default AccordionSec