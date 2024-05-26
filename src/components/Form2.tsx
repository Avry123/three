import {useState} from 'react'

const Form = () => {

    const [data,setData] = useState({name:'',email:'',address:''})

    const onTyping = (e) => {
          const {name,value} = e.target;
          setData(prev  => ({...prev,[name]:value}))
    }

    return (
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Address" />
        </form>
    )

}