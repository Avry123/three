import React, {useState} from 'react'
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image'


export default function ShyprocketButton() {
    const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className='relative group min-w-[200px] max-w-[200px] border-[1px] border-black py-1 px-3 items-center flex justify-between'>
        <Image src={'https://sr-sidebar.shiprocket.in/assets/navbar/buyer_experience_active.svg'}  
        width={20}
        height={20}
        alt='Profile'
        />
        <p className='ml-2'>Select Modes</p>
        <FaChevronDown
          className='cursor-pointer ml-auto'
          onClick={() => setDropDown(!dropDown)}
        />
      </div>
      <div className={`absolute rounded-md bg-slate-300 mt-3 min-w-[200px] max-w-[200px] flex flex-col space-y-2   border-x-2 shadow-xl  transition-transform origin-top duration-300 ${dropDown ? 'scale-y-100' : 'scale-y-0'}`}>
       <p className='text-white font-semibold p-2 hover:bg-slate-100 rounded-md w-full text-end'>Brand Boost</p>
       <p className='text-white font-semibold p-2 hover:bg-slate-100 rounded-md w-full text-end'>Buyer Communication</p>
       <p className='text-white font-semibold p-2 hover:bg-slate-100 rounded-md w-full text-end'>Return and funds</p>
      </div>
    </>
  )
}

