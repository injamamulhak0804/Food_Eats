import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { AiFillTag } from "react-icons/ai";
import { IoHelpOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
                {/* let side */}
                <div className='flex items-center'>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer mr-2'>
                        <AiOutlineMenu size={25} />
                    </div>
                    <h1 className='sm:text-3xl text-xl font-bold px-2 lg:text-4xl'>
                        Best <span>Eats</span>
                    </h1>

                    <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px] '>
                        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                        <p className='p-2'>Pickup</p>
                    </div>
                </div>

                {/* serach Input */}

                <div className='bg-gray-200 flex items-center rounded-full px-2 py-1 sm:min-w-[400px]'>
                    <AiOutlineSearch size={25} />
                    <input type="text" className='bg-transparent focus:outline-none pl-1 w-full ' placeholder='search food' />
                </div>

                <div>
                    <button className='md:flex py-2 gap-2 bg-black rounded-full text-white items-center hidden '>
                        <BsFillCartFill size={20} /> Card
                    </button>
                </div>
            </div>

            {/* mobile Menu*/}
            {/* Overlay  */}

            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0"></div> : ''}
            {/* side drawer menu  */}
            <div className={nav ? 'fixed top-0 w-[300px] left-0 h-screen bg-white shadow-lg z-10 duration-300' :
                'fixed top-0 w-[300px] left-[-100%] h-screen bg-white shadow-lg z-10 duration-300'}>
                <div onClick={() => setNav(!nav)}>
                    <AiOutlineClose size={30} className='absolute right-4 top-2 cursor-pointer bg-slate-300 p-1 rounded-lg' />
                </div>
                <h2 className='text-2xl p-4 select-none'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><MdFavorite size={25} className='mr-4' />Favorites</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><CiWallet size={25} className='mr-4' />Wallet</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><IoHelpOutline size={25} className='mr-4' />Help</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><AiFillTag size={25} className='mr-4' />Promotion</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-slate-300'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
                    </ul>
                </nav>
            </div>



        </>
    )
}

export default NavBar