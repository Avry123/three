'use client'

import ButtonFormStatus from '../../components/ButtonFormStatus'
import FormMiddleWareFetch from '../../components/formMiddlewareFetch'
import  handleSubmit  from '../../../actions/posingData'
import {useRef} from 'react'

export default  function page() {

    const ref = useRef<HTMLFormElement>(null);

  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
      <form 
      ref={ref}
      className="w-[50%] h-[50%]" action={async (formdata) => {
        ref.current?.reset()
        let {error } : any  = await handleSubmit(formdata)
        console.log(error);
      }}>
        <input
          className="w-full p-6 rounded-md"
          type="text"
          name="content"
          placeholder="content"
        />
        <ButtonFormStatus />
      </form>
    </div>
    <FormMiddleWareFetch />
    </>
    
  );
}
