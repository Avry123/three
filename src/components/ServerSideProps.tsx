import React from 'react'

interface dataSchem {
    Title: string;
    Message: string;
    
}

export default async function Page() {

    let res = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage')
    let data : dataSchem[] = await res.json()


  return (
    <div className='p-6 flex flex-col gap-4 justify-center items-center'>
        {data.map(({Title,Message}, index) => (
            <div key={index} className='w-[50%] flex flex-col p-4 bg-red-200 rounded-md'>
                <p>Title: {Title}</p>
                <p>Title: {Message}</p>
            </div>
        ))}
    </div>
  )
}

