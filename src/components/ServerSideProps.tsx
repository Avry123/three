
import React, {useEffect, useState} from 'react'
import Card from './Card'
import { fetchData } from '../../actions/serverActions';

// ServerSideProps.tsx
interface dataSchem {
  Title: string;
  Message: string;
  
}

export default  function Page() {

let [data,setData] = useState<dataSchem[]>([])

useEffect(() => {
  const fetchDataUsingMethod =  async () : Promise<dataSchem[]> => {
    let data = await fetchData()
    return data
  }
  let dataFetched = fetchDataUsingMethod() 
  dataFetched.then((data : dataSchem[]) =>  setData(data))
}, [])

return (
  <div className='p-6 flex flex-col gap-4 justify-center items-center max-h-full overflow-y-auto'>
      {data.map(({Title,Message},index) => (
    <Card key={index} title={Title} message={Message}  />
      ))}
  </div>
)
}

