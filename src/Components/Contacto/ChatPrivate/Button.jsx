import React from 'react'
import { Link } from 'react-router-dom'
//import './Button.css'
import chat from '../../../assets/chat.webp'

function Button() {
  return (
    <div>
        <Link to="/chat" target="_blank"  className='btn-flotante'>
           <button>
            {/* Chatea con nosotros */}
            <img src={chat} alt="chat" width="150px" height="150px" className='img-chat' />
           </button>
        </Link>
        
    </div>
  )
}

export default Button