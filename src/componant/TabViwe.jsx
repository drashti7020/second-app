import React from 'react'
import '../componant/TabViwe.css'

const TabViwe = () => {
    let ary = [
        {
            title :"Home",
            desc:"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.  at elementum eu facilisis sed odio morbi quisLaoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet.Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            title :"Profile",
            desc:"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis at elementum eu facilisis sed odio morbi quisLaoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet."
        },
        {
            title :"Contact",
            desc:" Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque .donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pe . Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quisLaoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec."
        },
        {
            title :"Disable",
            desc:"Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec. at elementum eu facilisis sed odio morbi quisLaoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet."
        },
    ]
  return (
   <>
   <div className='container pt-5 '>
  
     <section id='tab-viewer'>
     <div className='section title'>
        <h2 id='head' className='pt-5'>Servies</h2>
        <p id='head2'>check our services</p>
      </div>
     </section>
   <nav>
  <div class="nav nav-tabs pt-4" id="nav-tab" role="tablist">
    {
        ary?.map((x,i)=>{
            return(  
            <button class={`nav-link ${i==0 ? "active" : ""} m-2` } id="nav-home-tab" data-bs-toggle="tab" 
            data-bs-target={`#nav-tab${i}`} type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                {x?.title}</button>
            )
        })
    }
   

  </div>
</nav>

<div class="tab-content pt-3 text-center" id="nav-tabContent">
    {
        ary?.map((x,i) =>{
            return (
                <div class={`tab-pane fade ${i == 0 ? "active show" : ""}`} id={`nav-tab${i}`} role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    {x?.desc}
                </div>
        );
        })}
 
</div>
   </div>
 </>
  )
}

export default TabViwe