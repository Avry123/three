'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
 
  return (
    <div className='absolute mx-auto my-auto w-[80%] h-[80%] border-md bg-white'>
      <h2 className='text-6xl font-bold'>Something went wrong!</h2>
      <button
      className='w-[250px] h-[80px] rounded-md font-bold text-white bg-blue-400'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}