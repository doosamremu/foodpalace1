import React from 'react';
import { categories } from './data.js';

const Category = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 justify-center '>
        <div className='text-center w-auto mb-4'>
            <h1 className='text-yellow-300 bg-black rounded-full font-bold text-4xl inline-block  p-4 pr-8 pl-8 mx-auto justify-center items-center'>
                Top Categories
            </h1>
        </div>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;