import React from 'react'

interface props {
  variant : 'Green' | 'Red' | 'Blue'
}

export default function Light({variant = 'Green'} : props) {
  return (
    <>
      <div className='w-14 h-14 rounded-lg p-6 bg-lime-500'><h1>Hello</h1></div>
      {variant === 'Green' ?  <div className='w-14 h-14 rounded-full bg-green-500'>{variant}</div> : null}
      {variant === 'Red' ?  <div className='w-14 h-14 rounded-full bg-red-500'>{variant}</div> : null}
      {variant === 'Blue' ?  <div className='blue'>{variant}</div> : null}
    </>
  )
}

