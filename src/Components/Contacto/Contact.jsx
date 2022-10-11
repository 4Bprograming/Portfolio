import React from 'react'
import Email from './Email/Email'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import whatsapp from '../../assets/WhatsApp.png'
import './Contac.css'

function Contact() {
  return (
    <>
    <div className='contactAll'>

          
              <Email/>
          

          <div className='networks '>
          <span style={{ textDecoration: 'inherit', color: 'inherit', fontSize: "20px" }}>Argentina</span>
          <a href='https://api.whatsapp.com/send?phone=5492615386558'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className='gitHub' />
          </a>
         
          <a href='https://www.instagram.com/4b_programing/'>
              <BsInstagram className='instagram'/>
          </a>
          <span style={{ color: "white" , fontSize: "20px", textDecoration: 'inherit' }}>Perú</span>
          <a href='https://api.whatsapp.com/send?phone=51925892327'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className='gitHub' />
              
          </a>
          </div>
         
    </div>
    </>
  )
}

export default Contact