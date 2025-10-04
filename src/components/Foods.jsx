import React, { useState } from 'react';
import { data } from './data.js';

const Foods = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

    return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <div className='text-center w-auto mb-1'>
      <h1 className='text-yellow-300 bg-black rounded-full font-bold text-4xl inline-block  p-3 pr-8 pl-8'>
        Top Rated Menu Items
      </h1>
      </div>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mt-0'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-white bg-black rounded-full inline-block pr-4 pl-4 p-1'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-white bg-black rounded-full inline-block pr-4 pl-4 p-1 ml-9'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-black text-black hover:bg-black hover:text-white rounded-full p-1'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-black text-black  hover:bg-black hover:text-white rounded-full p-1'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-black text-black  hover:bg-black hover:text-white rounded-full p-1'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-black border-black text-white text-justify p-1 pr-3 pl-3 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Foods