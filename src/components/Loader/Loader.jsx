import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
  return (
    <div className="container-spinner">
      <Spinner  className='spinner' animation='border'/>
    </div>
  )
}
