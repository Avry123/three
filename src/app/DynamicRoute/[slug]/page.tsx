import React from 'react'

function page(props : { params : {slug: string, searchParams : {}}}) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <h1 className='text-6xl'>The id is {props.params.slug}</h1>
    </div>
  )
}

export default page