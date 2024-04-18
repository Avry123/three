import React from 'react'
import {handleSubmit} from '../../../actions/serverActions'
import Button from '../../components/Button'

interface inputSchema {
    title: string;
    message:string;
}

interface titleMessage {
    Title: string;
    Message: string;
}

export default async function Page() {
    const response = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage', {
        cache: 'no-cache',
    })

    const titleMessage : inputSchema[] = await response.json();

    
  return (
    <>
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-green-200'>
        <form action={handleSubmit} className='w-[50%] h-[50%] mx-auto my-auto block'>
        <input name='Title' className='w-full p-2 rounded-md border-[1px]' type='text' placeholder='Title' />
        <input name='Message' className='w-full  p-2 my-4 rounded-md border-[1px]' type='text' placeholder='Message' />
        <input className='w-full p-2 rounded-md bg-blue-400 text-white' type='submit' value='submit' />
    </form>
    <Button />
    </div>
    <div className='flex flex-col items-center  gap-3'>
        {titleMessage.map((i ,index) => {
            return (
                <div key={index} className='w-fit p-5 bg-white rounded-md'>
                    <p>{i.Title}</p>
                    <p>{i.Message}</p>
                </div>
            );
        })}
    </div>
    </>    
  )
}

