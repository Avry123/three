

interface response {
    message: string;
    id: string
}

export default async function page() {
    let res = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/todo')
    let data : [] = await res.json()

    console.log(data)
    
    

    return (
        <div className="w-screen h-screen text-center">
            {
                data.map((({message,id} : response, index) => (
                    <h1 className="text-3xl font-bold my-3" key={id}>{id}.  {message}</h1>
                )))
            }
        </div>
    )
    
}