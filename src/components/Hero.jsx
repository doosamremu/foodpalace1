import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px]  mx-auto p-4'>
        
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
         <img className=' w-full max-h-[500px] object-cover ' src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg" alt="/" />
        {/* Text */}                        
        <div className=' absolute top-1/4 w-full text-center'><h1 className='text-4xl pt-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>The <span className='text-yellow-300'>Best</span></h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>Foods <span className='text-yellow-300'>Delivered</span></h1>
        <button className='bg-yellow-300 text-black px-8 py-3 rounded-full mt-4 font-bold hover:scale-105 duration-300'>Order Now</button>
        </div> 
      </div>

      

    </div>
  )
}

export default Hero