import React from 'react'

interface slugSingle {
  slug: string
}

interface slugArray {
  slug : slugSingle[]
}

export default function page({params} : {params: {slug: []}}) {
  
    return (
    <div className='w-screen h-screen flex justify-center items-center'>
    {params.slug.map((i,index) => (
      <h1 key={index}>{i}</h1>
    ))}     
    </div>
  )
}

 