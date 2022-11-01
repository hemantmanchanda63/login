import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
        <h1 >404 Not Found</h1>
        <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
        <button type="button" className="btn btn-primary hell">
              <Link className='hello' to="/">Go Back to Homepage</Link>
            </button>
        </div>
        </div> 
    </>
  )
}

export default Error

