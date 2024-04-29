'use client'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

import ServerSideProps from '../../components/ServerSideProps'

export default function Page() {
    const [data,setData] = useState({title:'',message:''}) 
    const { title, message } = useSelector((state : any) => state.titleAndMessage);

   useEffect(() => {
    setData({title:title,message:message})
   },[title,message])

    return (
       <div className="w-screen  flex" >
        <div className="w-[70%] h-screen flex justify-center items-center">
            <form className="w-[50%] h-[50%] flex flex-col gap-2 border-2 border-black rounded-md">
                <input className="border-2 border-black rounded-md p-2" 
                type="title" 
                name="title" 
                placeholder="title"  
                onChange={(e : any)  => setData({...data,title:e.target.value})}
                value={data.title}
                />
                <input className="border-2 border-black rounded-md p-2" 
                type="title" 
                name="title" 
                placeholder="message"  
                onChange={(e: any) => setData({...data,message:e.target.value})}
                value={data.message}
                />
                <input className="w-[150px] p-2 rounded-md text-bold bg-slate-300 block mx-auto" type="submit" name="submit" value='submit' />
            </form>
        </div>
            <ServerSideProps  />
        <div className="w-[30%] h-screen">
        </div>
       </div> 
    )
}