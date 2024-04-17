import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTruckArrowRight } from "react-icons/fa6";

export default function Page() {
  return (
    <div className='min-h-screen p-4 bg-slate-200'>
        <p className='text-center md:text-left text-4xl font-bold'>Apps</p>
        <p className='text-center md:text-left text-sm my-2'>Explore,Discover and Elevate:Your one destination for finding solutions of all your business problems</p>
        <p className='text-indigo-500 flex cursor-pointer '>Apps <MdKeyboardArrowRight className='text-2xl text-indigo-500' /></p>
        <div className='bg-white rounded-md p-4 mt-2'>
            <p className='text-center md:text-left text-xl font-semibold'>Recently Launched</p>
            <p className='text-center md:text-left text-base my-2'>App best suited for uplifting your e-commerce journey.</p>
            {/* Sections for cards */}
            {/* <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='w-[80%] md:w-[30%] min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div> */}
            {/* Sections for cards */}
                    {/* Grid View */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4'>
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row cursor-pointer relative'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-xs my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
                <img className='absolute top-2 left-[-6px]' src='https://app.shiprocket.in/seller/assets/images/one-impression/one-imp-new.svg' alt='flag' />
            </div>
            {/* Sections for cards */}
        </div>
        {/* Grid View */}
        </div>
        <div className='w-full bg-white rounded-md mt-2 p-4'>
        <p className='text-center md:text-left text-xl font-semibold'>All apps</p>
        <p className='text-center md:text-left text-sm my-2'>App best suited for uplifting your e-commerce journey.</p>
        {/* Grid View */}
        <div className='w-full grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4'>
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
            {/* Sections for cards */}
            <div className='w-full flex flex-col items-center md:flex-row'>
                <div className='min-h-[240px] border-[1px] border-slate-400 p-4 rounded-md'>
                    <FaTruckArrowRight className='text-4xl text-indigo-600 block mx-auto' />
                    <p className='text-center text-xl mt-2 font-semibold'>Amplify</p>
                    <p className='text-center text-sm my-6'>The power of influencer Marketing now in your hands.</p>
                    <button className='w-[120px] px-4 py-2 border-2 border-indigo-600 bg-white text-indigo-600 rounded-md block mx-auto'>Install</button>
                </div>
            </div>
            {/* Sections for cards */}
        </div>
        {/* Grid View */}
        </div>
    </div>
  )
}

