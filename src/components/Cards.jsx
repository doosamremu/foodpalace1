import React from 'react'

const Cards


= () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlays */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <button className='border-yellow bg-black text-white mx-2 absolute bottom-4 hover:scale-105 duration-300 font-bold px-8 py-3 rounded-full font-mono'>
                    Order Now
                </button>
            </div>

              <img className='rounded-xl w-full object-cover max-h-[160px] md:max-h-[200px]' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="/" />
        </div>

         {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlays */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <button className='border-yellow bg-black text-white mx-2 absolute bottom-4 hover:scale-105 duration-300 font-bold px-8 py-3 rounded-full font-mono'>
                    Order Now
                </button>
            </div>

              <img className='rounded-xl w-full object-cover max-h-[160px] md:max-h-[200px]' src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg" alt="/" />
        </div>


         {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlays */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <button className='border-yellow bg-black text-white mx-2 absolute bottom-4 hover:scale-105 duration-300 font-bold px-8 py-3 rounded-full font-mono'>
                    Order Now
                </button>
            </div>

              <img className='rounded-xl w-full object-cover max-h-[160px] md:max-h-[200px]' src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg" alt="/" />
        </div>


    </div>
  )
}

export default Cards


