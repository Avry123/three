

export default function Card({title,message,index} : {title: string; message: string,index: number}) {
    return (
        <div key={index} className='w-[50%] flex flex-col p-4 bg-red-200 rounded-md'>
            <p className="text-black font-bold">Title {title}</p>
            <p className="text-black font-bold">Message {message}</p>
        </div>
    )
}