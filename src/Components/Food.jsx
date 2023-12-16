import React, { useState } from 'react'
import { data } from './../Data/data'

const Food = () => {
  const [food, setFood] = useState(data);


  // filter Food Type 

  const filterType = (items) => {
    setFood(
      data.filter((item) => {
        return item.category === items;
      })
    )
  }

  //Filter Price 

  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }




  return (
    <div className='max-w-[1640px] mx-auto py-12 px-4 m-auto'>
      <h1 className='text-orange-600 font-bold text-2xl md:text-4xl pb-10 text-center'>Top Rated Menu Items</h1>

      {/* Filtered Row  */}

      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Filter Type  */}

        <div>
          <p className='font-bold text-gray-700 py-5'>Filtered Type</p>
          <div className='flex justify-between flex-wrap max-w-[490px] w-full'>
            <button onClick={() => setFood(data)} className='border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white'>All</button>
            <button onClick={() => filterType('burger')} className='border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white'>Burger</button>
            <button onClick={() => filterType('pizza')} className='border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white'>Pizza</button>
            <button onClick={() => filterType('salad')} className='border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white'>Salad</button>
            <button onClick={() => filterType('chicken')} className='border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white'>Chicken</button>
          </div>
        </div>


        {/* Filter Price  */}


        <div>
          <p className='font-bold py-5 text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$</button>
            <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$$$</button>
          </div>
        </div>
      </div>

      {/* Display Images  */}

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((items, index) => (
          <div key={index} className='border shadow-md hover:scale-105 duration-300 rounded-lg'>
            <img src={items.image} alt={items.name} className='w-full h-[200px] object-cover rounded-lg' />
            <div className='flex justify-between px-2 py-4 '>
              <p className='font-bold'>{items.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>{items.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Food