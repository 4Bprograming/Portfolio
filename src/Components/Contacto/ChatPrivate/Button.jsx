import React from 'react'
import { Link } from 'react-router-dom'
//import './Button.css'
import chat from '../../../assets/chat.png'

function Button() {
  return (
    <div>
        <Link to="/chat" target="_blank"  className='btn-flotante'>
           <button>
            {/* Chatea con nosotros */}
            <img src={chat} alt="" width="250px" height="250px" className='img-chat' />
           </button>
        </Link>
        
    </div>
  )
}

export default Button