import React from 'react'

interface props {
  variant : 'Green' | 'Red' | 'Blue'
}

export default function Light({variant = 'Green'} : props) {
  return (
    <>
      {variant === 'Green' ?  <div className='w-14 h-14 rounded-full bg-green-500'></div> : null}
      {variant === 'Red' ?  <div className='w-14 h-14 rounded-full bg-red-500'></div> : null}
      {variant === 'Blue' ?  <div className='blue'></div> : null}
    </>
  )
}

