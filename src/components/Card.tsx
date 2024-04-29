'use client';

import { useDispatch } from 'react-redux'; // Import the Redux dispatch hook
import { setTitleAndMessage } from '@/redux/TitleAndMessageSlice'; // Import the action from your Redux slice


export default function Page({ title, message } : {title: string, message: string}) {
  // Initialize the Redux dispatch function
  let dispatch = useDispatch();

 

  

  return (
    <div className='w-[50%] flex flex-col p-4 gap-2 bg-red-200 rounded-md'>
      <p className="text-black font-bold">Title: {title}</p>
      <p className="text-black font-bold">Message: {message}</p>
      <div>
        {/* Use the onClick event to trigger the dispatch */}
        <button
          onClick={() => dispatch(setTitleAndMessage({ title, message }))} // Corrected onClick event handler
          className="bg-slate-400 text-black font-bold p-2 rounded"
        >
          Add +
        </button>
      </div>
    </div>
  );
}
