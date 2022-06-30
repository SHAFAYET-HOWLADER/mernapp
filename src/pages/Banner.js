import React from 'react'
import banner from "../banner_img/maditaion_one.jpg";
import banner_bg from "../banner_img/banner_bg.jpg";
const Banner = () => {
  return (
<>
<section id="banner" style={{
           background: `url(${banner_bg})`,
           backgroundPosition: "center",
           backgroundBlendMode:"overlay",
           backgroundColor: "rgba(0,0,0,0.7)",
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           objectFit: "cover",
           padding: "100px 0px"
       }}>
            <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
               <div data-aos="fade-left" data-aos-duration="2000">
               <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
               </div>

                <div className='text-white w-3/5' data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                <h3 className='text-2xl pb-4'>Deep Thinking</h3>
                <h1 class="text-5xl font-bold">Professional Meditation Services!</h1>
                <p class="py-6 w-4/5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>         
       </section>
        <div className='bg-accent w-4/5 mx-auto relative z-20 mt-[-50px] rounded-lg py-10 px-10 mb-24'>
        <h3 className='text-2xl pb-4'>Get Free Estimate</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
         <input className='p-2 rounded-lg border-black' type="text" placeholder='name'/>
     </div>
    </div>
</>
  )
}

export default Banner