import { CheckboxProps } from '@material-tailwind/react';
import React, { InputHTMLAttributes, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function SelectModes() {
  const [dropDown, setDropDown] = useState(false);

  const clearCheckboxes = () => {
    // Get all checkboxes by their type
    const checkboxes : NodeListOf<HTMLInputElement>   = document.querySelectorAll('input[type="checkbox"]');
    // Uncheck each checkbox
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <>
      <div className='relative group min-w-[200px] max-w-[200px] border-[1px] border-black py-1 px-3 items-center flex justify-between'>
        <p>Select Modes</p>
        <FaChevronDown
          className='cursor-pointer'
          onClick={() => setDropDown(!dropDown)}
        />
      </div>
      <div className={`absolute rounded-md mt-3 min-w-[200px] max-w-[200px] flex flex-col  border-x-2 shadow-xl  transition-transform origin-top duration-300 ${dropDown ? 'scale-y-100' : 'scale-y-0'}`}>
        <div className='flex space-x-3 p-2 hover:bg-purple-100'>
            <input type='checkbox' name='' />
            <p>Air</p>
        </div>
        <div className='flex space-x-3 p-2 hover:bg-purple-100'>
            <input type='checkbox' name='' />
            <p>Surface</p>
        </div>
        <div className='flex space-x-3 p-2 hover:bg-purple-100'>
            <input type='checkbox' name='' />
            <p>HyperLocal</p>
        </div>
        <div className='flex space-x-3 p-2'>
            <button className='text-white bg-violet-500 px-2 py-1 rounded-md' onClick={clearCheckboxes}>Clear</button>
            <button className='text-white bg-violet-500 px-2 py-1 rounded-md'>Apply</button>
        </div>
      </div>
    </>
  );
}
