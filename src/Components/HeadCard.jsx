import React from 'react'

const HeadCard = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-12 grid md:grid-cols-3 gap-6'>
            {/* card  */}
            <div className='rounded-xl relative'>
                {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='absolute top-[30%]  left-[10%]'>
                        <p className='font-bold md:text-xl px-2 pt-4 my-2'>Sun's Out, BOGO's Out</p>
                        <p className='px-2 my-2 font-thin'>Through 8/26</p>
                        <button className='border-white bg-white font-bold text-black mx-2 '>Order Now</button>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className='rounded-xl max-h-[190px] md:max-h-[200px] w-full object-cover'
                    alt="" />
            </div>

            <div className='rounded-xl relative max-h-[350px] overflow-hidden'>
                {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='absolute top-[30%]  left-[10%]'>
                        <p className='font-bold md:text-xl px-2 pt-4 my-2'>New Restaurants</p>
                        <p className='px-2 my-2 font-thin'>Added Daily</p>
                        <button className='border-white bg-white font-bold text-black mx-2 '>Order Now</button>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className='rounded-xl max-h-[190px] md:max-h-[200px] w-full object-cover '
                    alt="" />
            </div>

            <div className='rounded-xl relative'>
                {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='absolute top-[30%]  left-[10%]'>
                        <p className='font-bold md:text-xl px-2 pt-4 my-2'>BIG Offers</p>
                        <p className='px-2 my-2 font-thin'>In Every Weekends</p>
                        <button className='border-white bg-white font-bold text-black mx-2 '>Order Now</button>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className='rounded-xl max-h-[190px] md:max-h-[200px] w-full object-cover'
                    alt="" />
            </div>
        </div>
    )
}

export default HeadCard