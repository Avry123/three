import React from 'react'

export default function page({params} : {params: {slug: string, id: string}}) {
  console.log(params)
    return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <h1 className='text-6xl'>The slug is {params.slug}, the id is {params.id}</h1>
    </div>
  )
}

