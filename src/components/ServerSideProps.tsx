import React from 'react'
import Card from './Card'

// ServerSideProps.tsx
interface dataSchem {
  Title: string;
  Message: string;
  
}

export default async function Page() {

  let res = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage')
  let data : dataSchem[] = await res.json()


return (
  <div className='p-6 flex flex-col gap-4 justify-center items-center max-h-full overflow-y-auto'>
      {data.map(({Title,Message},index) => (
    <Card key={index} title={Title} message={Message}  />
      ))}
  </div>
)
}

