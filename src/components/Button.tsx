'use client'
import React from 'react'
import {handleSubmit} from '../../actions/serverActions'
import { useTransition } from 'react'

function Button() {

    const [isPending,startTransition] = useTransition();

    const formData = new FormData();
    formData.append('Title','Zedd')
    formData.append('Message','When zedd is in form he is awesome');

  return (
    <button
    className='px-6 py-3 bg-red-200 text-white font-bold'
    onClick={() => startTransition(() => handleSubmit(formData))}
    >
      {isPending ? 'Adding...' : 'Added'}
      </button>
  )
}

export default Button