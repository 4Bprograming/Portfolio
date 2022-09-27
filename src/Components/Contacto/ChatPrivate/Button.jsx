import React from 'react'
import { Link } from 'react-router-dom'
// import './Button.css'

function Button() {
  return (
    <div>
        <Link to="/chat" target="_blank" className='start-animate'>
           <button>
            Chatea con nosotros
           </button>
        </Link>
        
    </div>
  )
}

export default Button