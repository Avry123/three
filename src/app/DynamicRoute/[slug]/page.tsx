import React from 'react'

function page(props : { params : {slug: string, searchParams : {}}}) {
  return (
    <div>
        <h1>{props.params.slug}</h1>
    </div>
  )
}

export default page