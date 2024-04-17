'use client'
import React, {useState} from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { LuCrown } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

// AiFillLike BsBuildingsFill FaCalendar

function page() {

    const [next,setNext] = useState(false);

  return (
    <section className='w-screen mx-auto lg:w-[80%] p-6'>
    <div className='flex justify-between'>
        <p className='text-xl font-semibold'>Brand Boost</p>
        <span className='text-sm text-indigo-800 bg-indigo-200 px-3 py-2 rounded-md'>Preview Tracking Page</span>
    </div>
    <p className='text-sm my-2'>Customise your tracking page and improve brand recognition.</p>
    <p className='text-indigo-500 text-base my-4 flex items-center'><IoIosChatboxes className='text-sm' />FAQs</p>
    {/* Image */}
    <div className='w-full  '>
        <div className='w-full flex flex-col lg:flex-row border-[15px] border-white bg-blue-100 rounded-md'>
            {/* left */}
            <div className='lg:w-[50%] w-[100%] p-4'>
                <h1 className='font-bold text-2xl text-center md:text-left'>Uplift customer experience through Brand Boost</h1>
                <h3 className='py-4  text-xl md:inline-block font-semibold mb-2 text-indigo-500 border-b-2 border-indigo-500 md:text-left text-center'>Reduce support cost by 45%</h3>
                {/* What you get and benifits */}
                <div className='grid grid-cols-1 md:grid-cols-2 space-x-4'>
                    {/* What you get */}
                    <div>
                        <p>What you get:</p>
                        <div className='flex items-center gap-2'><img className='w-4 h-4' src='https://app.shiprocket.in/seller/assets/images/trackingpage/subbanner_1.png' /><p className='text-sm flex gap-1 my-2'>Branded Company Logo</p></div>
                        <div className='flex items-center gap-2'><img className='w-4 h-4' src='https://app.shiprocket.in/seller/assets/images/trackingpage/subbanner_2.png' /><p className='text-sm flex gap-1 my-2'>Product Recommendations</p></div>
                        <div className='flex items-center gap-2'><img className='w-4 h-4' src='https://app.shiprocket.in/seller/assets/images/trackingpage/subbanner_3.png' /><p className='text-sm flex gap-1 my-2'>Promotional Banners</p></div>
                        <div className='flex items-center gap-2'><img className='w-4 h-4' src='https://app.shiprocket.in/seller/assets/images/trackingpage/subbanner_4.png' /><p className='text-sm flex gap-1 my-2'>Analytics Dashboard</p></div>
                        <button className='w-full flex justify-center items-center gap-2 p-4 bg-violet-600 text-white font-bold rounded-md'><LuCrown className='text-xl' />Activate Now</button>
                    <p className='text-xs my-2'>You are not eligible for 45-Days FREE Access.</p>
                    </div>
                    {/* What you get */}
                    {/* Benifits */}
                    <div className='relative'>
                        <p>Benefits:</p>
                        <div className='flex items-center gap-2'><img src='https://app.shiprocket.in/seller/assets/images/trackingpage/bannerTick.png' /><p className='text-sm flex gap-1 my-2'>15% Additional Repeat Orders</p></div>
                        <div className='flex items-center gap-2'><img src='https://app.shiprocket.in/seller/assets/images/trackingpage/bannerTick.png' /><p className='text-sm flex gap-1 my-2'>10% Additional Revenue</p></div>
                        <div className='flex items-center gap-2 mb-auto'><img src='https://app.shiprocket.in/seller/assets/images/trackingpage/bannerTick.png' /><p className='text-sm flex gap-1 my-2'>2X NPS Collection</p></div>
                        <p className='text-base md:absolute bottom-12'>Pay just <span className='line-through'>$3.99</span><span className='text-2xl font-bold ml-2 text-indigo-500'>$ 2.99</span><span className='text-xs text-indigo-500'>+GST</span></p>
                    </div>
                    {/* Benifits */}
                </div>
                {/* What you get and benifits */}
            </div>
            {/* left */}
            <div className='lg:w-[50%] w-[100%] p-4 h-fit  relative'>
                <img className='h-[60%]  block mx-auto' src='https://app.shiprocket.in/seller/assets/images/trackingpage/vasBanner.png' alt='screens' />
                <button className='w-full mx-auto mt-4 md:w-fit rounded-md  lg:absolute lg:top-[85%]  lg:right-[30%] p-4 lg:p-2 border-2 flex items-center justify-center gap-2 border-violet-600 text-violet-600'>Preview Sample<MdArrowOutward className='text-sm' /></button>
            </div>
        </div>
    </div>
    {/* Image */}
    <div className='flex items-center bg-orange-100 rounded-md gap-2 p-2 mt-2'>
        <img className='w-6 h-6' src='https://app.shiprocket.in/seller/assets/images/trackingpage/premiumIcon.png' alt='crown' />
        <p className='text-sm'>Brand Boost features are paid features.</p>
        <span className='text-violet-400 border-b-[1px] text-sm border-violet-400'>View More Info</span>
    </div>
    <div className='w-full flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 mt-4'>
     <div className='w-[100%] lg:w-[30%] h-fit bg-white rounded-md'>
        <div className='flex flex-col '>
            <p className='text-xl my-2 px-4 font-semibold text-slate-400'>BASIC SETUP</p>
            <div className=''>
                <p className='px-8 py-2 my-2 hover:bg-green-200'>Page Set Up</p>
            </div>
            <div className='flex pr-4'>
                <div className='flex items-center w-fit  space-x-4'>
                    <p className='text-xl my-2 px-4 font-semibold text-slate-400'>ADVANCED SET UP</p>
                    <img className='w-6 h-6' src='https://app.shiprocket.in/seller/assets/images/trackingpage/premiumIcon.png' alt='crown' />
                </div>
                <img className='ml-auto' src='https://app.shiprocket.in/seller/assets/images/trackingpage/advanceSetup/lockAdvance@2x.svg' alt='' />
            </div>
            <p className='px-6 py-2 my-2 text-slate-400 font-semibold'>Customise Tracking Page</p>
            <div className='flex space-x-4 px-8 py-2 my-2 hover:bg-green-200'>
                <p>Choose Template</p>
                <span className='p-1 text-sm text-white bg-green-700 rounded-md'>New</span>
            </div>
            <p className='px-8 py-2 my-2 hover:bg-green-200'>Advanced Page Set Up</p>
            <div className='flex space-x-4 px-8 py-2 my-2 hover:bg-green-200'>
                <p>Socail Content</p>
                <span className='p-1 text-sm text-white bg-green-700 rounded-md'>New</span>
            </div>
            <p className='px-8 py-2 my-2 hover:bg-green-200'>Promotional Banner</p>
            <div className='flex space-x-4 px-8 py-2 my-2 hover:bg-green-200'>
                <p>Recommendations</p>
                <span className='p-1 text-sm text-white bg-green-700 rounded-md'>New</span>
            </div>
            <p className='px-6 py-2 my-2 text-slate-400 font-semibold'>TRACKING WIDGET</p>
            <p className='px-8 py-2 my-2 hover:bg-green-200'>Old Tracking Widget</p>
            <p className='px-6 py-2 my-2 text-slate-400 font-semibold'>TRACKING WIDGET</p>
            <p className='px-8 py-2 my-2 hover:bg-green-200'>NPS Reports</p>
            <p className='px-8 py-2 my-2 hover:bg-green-200'>Analytics Dashboard</p>
        </div>
        </div>
     {!next ? (<div className='w-[100%] lg:w-[70%] p-4  bg-white rounded-md'>
            <p className='md:text-2xl font-bold text-center md:text-left'>Fill the details below to Personalise your tracking page</p>
            <p className='md:text-xl mt-4 font-semibold text-center md:text-left'>Add sub-domain for your tracking page</p>
            <p className='text-base mb-3 text-slate-400 text-center  md:text-left'>Enter your brand/company name below for brand recognition</p>
            <div className='w-[100%] md:w-[100%] lg:w-[50%]   flex flex-col md:flex-row my-2'>
                <input className='lg:w-[60%] md:min-w-fit  p-2 border-[1px]  rounded-l-md' type='text' placeholder='i.e. yourbrand/tracking' />
                <div className='w-full rounded-r-none mt-1 md:mt-0  md:w-fit p-2 bg-violet-100 text-violet-400 text-center border-[1px]  md:rounded-r-md'>shiprocket.co/</div>
            </div>
            {/* Website */}
            <p className='text-xl mt-4 font-semibold text-center md:text-left'>Website</p>
            <p className='text-base mb-3 text-slate-400 text-center md:text-left'>Enter your website/online store URL</p>
            <div className='w-[100%] flex-col md:flex-row  md:w-[100%] lg:w-[50%]   flex my-2'>
            <div className='w-full mb-1 md:mb-0  rounded-r-none md:w-fit p-2 bg-violet-100 text-violet-400 text-center border-[1px]  md:rounded-l-md'>http://www.</div>
            <input className='lg:w-[80%] md:min-w-fit p-2 border-[1px]  rounded-r-md' type='text' placeholder='i.e. abc.com' />
            </div>
            {/* Website */}
            {/* Company Logo */}
            <p className='text-xl mt-4 font-semibold text-center md:text-left'>Company Logo</p>
            <div className='w-[100%] md:w-[50%] mt-6 flex items-center  justify-center md:justify-start lg:justify-start space-x-4'>
            <button className="rounded-md border-2 border-dashed border-violet-500 px-5 py-12">
            <img className="mx-auto my-2" src="https://app.shiprocket.in/seller/assets/images/upload.svg" />
            <p className="text-sm">Upload Company</p>
            <p className="text-xs">(JPG,JPEG,PNG)</p>
            </button>
            <div className='font-thin text-slate-400 h-full'>
                <p className='my-auto'>Company logo size <br /> 120px X 120px <br /> (Max. file size 2MB)</p>
            </div>
            </div>
            {/* Company Logo */}
            {/* Privacy Policy */}
            <p className='text-xl mt-4 font-semibold text-center md:text-left'>Privacy Policy</p>
            <p className='text-base mb-3 my-2 text-slate-400 text-center md:text-left'>Add your privacy policy link here to inform buyers about your policies and guidelines.</p>
            <div className='w-[100%] md:w-[50%]'>
            <input className='w-full p-2 rounded-md border-2' type='text' name='policy_no' placeholder='Enter policy URL here' />
            </div>
            {/* Privacy Policy */}
            {/* Support Contact Number */}
            <div>
            <p className='text-xl mt-4 font-semibold text-center md:text-left'>Support Contact Number</p>
            <p className='text-base mb-3 my-2 text-slate-400 text-center md:text-left'>Add phone number for customers to reach your customer service team.</p>
            <div className='w-[100%] md:w-[40%]'>
            <input className='w-full p-2 rounded-md border-2' type='text' name='support_no' placeholder='Enter support number' />
            </div>
            </div>
            {/* Support Contact Number */}
            {/* Support Email Address */}
                <div>
            <p className='text-xl mt-4 font-semibold text-center md:text-left'>Support Email Address</p>
            <p className='text-base mb-3 my-2 text-slate-400 text-center md:text-left'>Add an email ID where customers can reach your customer service team.</p>
            <div className='w-[100%]  md:flex-row  md:w-[100%] lg:w-[50%]   flex my-2'>
            <div className='w-fit rounded-l-md flex items-center p-2 px-4 bg-violet-100 text-violet-600'><CiMail className='text-2xl'/></div>
            <input className='lg:w-[80%] w-[100%] md:min-w-fit p-2 border-[1px]  rounded-r-md' type='text' placeholder='i.e. abc.com' />
            </div>
                </div>
            {/* Support Email Address */}
            {/*  */}
            <div className='flex justify-between'>
                <div className='w-[80%] md:w-[50%]'>
                <p className='text-xl mt-4 font-semibold text-left'>Allow Buyers to initiate return of products directly from the tracking page</p>
                <p className='text-base mb-3 my-2 text-slate-400 text-left'>By enabling this option,you will give the buyer option to initiate return from the tracking page. The buyer will be able to take action as per the status selected on the Settings Page</p>    
                </div>
                <div className='w-[20%] md:w-[50%] flex justify-end items-start'>
                    {/* Toggle Button */}        
<label className="inline-flex items-center cursor-pointer mt-4">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6  bg-gray-200 outline-none peer-focus:ring-2 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-300"></div>
</label>
                    {/* Toggle Button */}
                </div>
            </div>
            {/*  */}
            {/* Buttons */}
            <div className='flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%]  flex justify-center md:justify-end'>
                <button className='w-fit px-9 py-3 bg-purple-600 font-bold text-white rounded-md '>Save</button>
            </div>
            <div className='w-[100%] md:w-[50%]  flex justify-center md:justify-end'>
                <button className='bg-transparent text-purple-600 flex items-center' onClick={() => setNext(!next)}>Next <MdArrowRightAlt className='text-5xl' /></button>
            </div>
            </div>
            {/* Buttons */}
        </div>) : 
        (<div className='w-[100%] lg:w-[70%] p-4  bg-white rounded-md'>
            {/* Card Part */}
            <div className='w-full bg-blue-100 p-2 md:p-7 lg:p-8 relative'>
                {/* Top Part */}
                <div className='w-full flex flex-col lg:flex-row mt-5'>
                    {/* Left */}
                    <div className='w-[100%] lg:w-[50%] lg:p-0'>
                    <div className='flex space-x-2 items-center  justify-center md:justify-start'>
                    <h1 className='lg:text-4xl text-2xl font-bold'>This is a paid feature</h1>
                    <img src='https://app.shiprocket.in/seller/assets/images/trackingpage/advanceSetup/lockAdvance@2x.svg' alt='' />
                    </div>
                    <h2 className='lg:text-xl font-thin text-center md:text-left my-6'>Unlock all the advanced features of Brand Boost using the button below</h2>
                    <div className='w-[100%]  flex flex-col  lg:flex-row md:space-x-2'>
                        <div className='w-[100%] lg:w-[50%]'>
                            <button className='w-full flex justify-center items-center gap-2 p-4 bg-violet-600 text-white font-bold rounded-md'><LuCrown className='text-xl' />Activate Now</button>
                        </div>
                        <div className='w-[100%] lg:w-[50%] flex items-center justify-center lg:justify-start my-2'>
                        <p className='lg:text-xl  bottom-12'>Pay just <span className='line-through text-sm'>$3.99</span><span className='text-xl font-bold ml-2 text-indigo-500'>$ 2.99</span><span className='text-xs text-indigo-500'>+GST</span></p>
                        </div>
                    </div>
                    <p className='text-base font-thin text-center lg:text-left my-2'>You are not elegible for 43 day access</p>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div className='w-[100%] lg:w-[50%] flex justify-center '>
                        <img className='' src='https://app.shiprocket.in/seller/assets/images/trackingpage/advanceSetup/locked_banner.png' alt='' />
                    </div>
                    {/* Right */}
                </div>
                {/* Top Part */}
                {/* Bottom Grid */}
                    <div className='w-[90%] grid grid-cols-1 lg:grid-cols-4 mx-auto  space-y-4 lg:space-y-0 my-6 '>
                        {/* <div className='absolute right-0 top-2 hidden lg:block h-[60%] w-[1px] border-2 border-dotted border-black'></div> */}
                        <div className='relative col-span-1 flex flex-col items-center space-y-2 bg-white  px-6 py-4 rounded-md md:rounded-none lg:rounded-l-md'><p className='md:text-xl lg:text-4xl font-extrabold flex space-x-3 items-center text-green-600'>65% <FaArrowDown className='md:text-xl lg:text-3xl  text-green-600' /></p><p className='lg:text-xl text-center'>Lesser <span className='font-semibold'>buyers</span> queries</p><div className='absolute right-0 top-2 hidden lg:block h-[60%] w-[1px] border-2 border-dotted border-slate-200 font-thin '></div></div>
                        <div className='relative col-span-1 flex flex-col items-center space-y-2 rounded-md md:rounded-none bg-white px-6 py-4'><p className='md:text-xl lg:text-4xl font-extrabold flex space-x-3 items-center text-green-600'>45% <FaArrowDown className='md:text-xl lg:text-3xl  text-green-600' /></p><p className='lg:text-xl text-center'>Lesser <span className='font-semibold'>support</span>cost</p><div className='absolute right-0 top-2 hidden lg:block h-[60%] w-[1px] border-2 border-dotted border-slate-200 font-thin'></div></div>
                        <div className='relative col-span-1 flex flex-col items-center space-y-2 rounded-md md:rounded-none bg-white px-6 py-4'><p className='md:text-xl lg:text-4xl font-extrabold flex space-x-3 items-center text-green-600'>15% <FaArrowDown className='md:text-xl lg:text-3xl  text-green-600' /></p><p className='lg:text-xl text-center'>More <span className='font-semibold'>repeat</span> orders</p><div className='absolute right-0 top-2 hidden lg:block h-[60%] w-[1px] border-2 border-dotted border-slate-200 font-thin'></div></div>
                        <div className='relative col-span-1 flex flex-col items-center space-y-2 rounded-md md:rounded-none bg-white px-6 py-4 lg:rounded-r-md'><p className='lg:text-4xl font-extrabold flex space-x-3 items-center text-green-600'>2X</p><p className='lg:text-xl text-center'>Better <span className='font-semibold'>NPS</span></p></div>
                    </div>
                {/* Bottom Grid */}
                <img className='absolute top-0 left-0' src='https://app.shiprocket.in/seller/assets/images/trackingpage/advanceSetup/icons/premium.svg' alt='premium' />
            </div>
            {/* Card Part */}
            {/* Table */}
                <div className='p-4'>
                    <p className='lg:text-3xl font-bold my-4'>Upgrade Your Order Tracking Experience<br />With <span className='text-violet-400'>Brand Boost</span></p>
                    <div className="relative overflow-x-auto">
                    <table className="w-full border-[1px] border-black">
        <thead className="">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <p className='lg:text-2xl font-bold'>Features</p>
                </th>
                <th scope="col" className="px-3 py-3 border-x-[1px] border-t-8 border-slate-300 ">
                    <div className='flex flex-col text-center'><p className='lg:text-2xl font-bold'>Basic</p><span className='text-sm '>Free</span></div>
                </th>
                <th scope="col" className="px-3 py-3 bg-yellow-100 border-t-8 border-orange-300 relative">
                <div className='flex flex-col text-center relative'><p className='lg:text-2xl font-bold'>Advanced Set Up</p><span className='text-sm '>PAID</span></div>
                {/* <img className='w-10 h-10 top-[-30px] z-[999] rounded-lg border-6 border-orange-300 absolute' src='https://app.shiprocket.in/seller/assets/images/trackingpage/premiumIcon.png' alt='crown' /> */}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="">
                <td  className="lg:text-xl font-semibold border-r-[1px]  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="px-3 py-4 lg:text-xl font-semibold   flex justify-center items-center"><IoCheckmarkSharp className=' text-4xl  font-semibold text-green-600' /></td>
                <td className="px-3 py-4 lg:text-xl border-l-[1px] font-semibold bg-yellow-100">
                <IoCheckmarkSharp className=' text-4xl my-auto mx-auto  font-semibold text-green-600' />
                </td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold border-r-[1px]  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="px-3 py-4 text-xl font-semibold   flex justify-center items-center"><IoCheckmarkSharp className=' text-4xl  font-semibold text-green-600' /></td>
                <td className="px-3 py-4 text-xl border-l-[1px] font-semibold  text-center bg-yellow-100">
                <IoCheckmarkSharp className=' text-4xl my-auto mx-auto  font-semibold text-green-600' />
                </td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold border-r-[1px]  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="px-3 py-4 text-xl font-semibold   flex justify-center items-center"><IoCheckmarkSharp className=' text-4xl  font-semibold text-green-600' /></td>
                <td className="px-3 py-4 text-xl border-l-[1px] font-semibold  text-center bg-yellow-100">
                    <IoCheckmarkSharp className=' text-4xl my-auto mx-auto  font-semibold text-green-600' />
                </td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold border-r-[1px]  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="px-3 py-4 text-xl font-semibold   flex justify-center items-center"><IoCheckmarkSharp className=' text-4xl  font-semibold text-green-600' /></td>
                <td className="px-3 py-4 text-xl border-l-[1px] font-semibold  text-center bg-yellow-100">
                    <IoCheckmarkSharp className=' text-4xl my-auto mx-auto  font-semibold text-green-600' />
                </td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
            <tr className="border-t-[1px] border-black">
                <td  className="lg:text-xl font-semibold  px-6 py-4  text-center ">
                    Estimated Delivery Date
                </td>
                <td className="text-xl font-semibold  border-x-[1px]  px-3 py-4  text-center">
                    <span className='font-semibold text-slate-400 text-3xl mx-auto my-auto'>X</span>
                </td>
                <td className="h-full px-3 py-4 text-xl font-semibold   bg-yellow-100"><IoCheckmarkSharp className='mx-auto my-auto text-4xl  font-semibold text-green-600' /></td>
            </tr>
        </tbody>
    </table>
</div>
                </div>
            {/* Table */}
            {/* Down Card */}
                <div className='w-full rounded-md bg-[#F1FFE8] flex  lg:space-x-2 flex-col p-4 lg:flex-row lg:p-8 lg:px-10 relative'>
                    <div className='w-[100%] lg:w-[70%]'>
                        <h1 className='text-left lg:text-4xl font-extrabold'>Get the best value for your money</h1>
                        {/* Two Grids */}
                        <div className='grid mt-4 grid-cols-1 lg:grid-cols-2  lg:space-x-2'>
                    {/* What you get */}
                    <div>
                        {/* // FaChartPie FaMapLocation AiOutlineRadarChart */}
                        <div className='flex items-center gap-2'><FaChartPie className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>Analytics Dashboard</p></div>
                        <div className='flex items-center gap-2'><FaMapLocation className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>Online Tracking Widget</p></div>
                        <div className='flex items-center gap-2'><AiOutlineRadarChart className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>NPS Score</p></div>
                        {/* <button className='w-full flex justify-center items-center gap-2 p-4 bg-violet-600 text-white font-bold rounded-md'><LuCrown className='text-xl' />Activate Now</button> */}
                    {/* <p className='text-xs my-2'>You are not eligible for 45-Days FREE Access.</p> */}
                    </div>
                    {/* What you get */}
                    {/* Benifits */}
                    <div className=''>
                        {/* // AiFillLike BsBuildingsFill FaCalendar */}
                        <div className='flex items-center gap-2'><AiFillLike className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>Marketing Assets</p></div>
                        <div className='flex items-center gap-2'><BsBuildingsFill className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>Product Recommendations</p></div>
                        <div className='flex items-center gap-2 mb-auto'><FaCalendar className='w-5 h-5 text-green-500'  /><p className=' flex gap-1 my-2 text-sm lg:text-xl'>Estimated Delivery Date</p></div>
                        {/* <p className='text-base md:absolute bottom-12'>Pay just <span className='line-through'>$3.99</span><span className='text-2xl font-bold ml-2 text-indigo-500'>$ 2.99</span><span className='text-xs text-indigo-500'>+GST</span></p> */}
                    </div>
                    {/* Benifits */}
                </div>
                        {/* Two Grids */}
                    </div>
                    <div className='w-[100%] lg:w-[30%]'>
                    <p className='text-sm lg:text-base text-center lg:mt-12'>Pay just <span className='line-through'>$3.99</span><span className='text-base lg:text-2xl font-bold ml-2 text-indigo-500'>$ 2.99</span><span className='text-xs text-indigo-500'>+GST</span></p>  
                    <button className='w-full my-2  flex justify-center items-center gap-2 p-4 bg-violet-600 text-white font-bold rounded-md'><LuCrown className='text-xl' />Activate Now</button>
                    <p className='text-xs my-2 text-center'>You are not eligible for 45-Days FREE Access.</p>
                    </div>
                     <img className='hidden lg:block absolute left-0 top-0' src='https://app.shiprocket.in/seller/assets/images/trackingpage/advanceSetup/icons/premium.svg' alt='arrow' /> 
                </div>
            {/* Down Card */}
        </div>)}
    </div>
    </section>
    
  )
}

export default page