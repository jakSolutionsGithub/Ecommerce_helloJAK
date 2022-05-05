import React from 'react'

import { Spinner } from 'react-bootstrap';

interface Props {
    message?: string;
}

const LoadingComponent = ({message = 'Loading...'}: Props) => {
  return (
   <div className='d-flex align-items-center justify-content-center'>
   <Spinner animation="grow" style={{}} />
       <h1>{message}</h1>
   </div>
    

  )
}

export default LoadingComponent