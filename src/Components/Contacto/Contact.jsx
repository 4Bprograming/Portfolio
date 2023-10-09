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
          <a href='https://api.whatsapp.com/send?phone=5492612060231'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className='gitHub' alt="whatsapp" />
          </a>
         
          <a href='https://www.instagram.com/4b_programming/'>
              <BsInstagram className='instagram'/>
          </a>
          <span style={{ color: "white" , fontSize: "20px", textDecoration: 'inherit' }}>Venezuela</span>
          <a href='https://api.whatsapp.com/send?phone=584129073025'>
              {/* <AiFillGithub className='gitHub'/> */}
              <img src={whatsapp}  className='gitHub' alt="gitHub"/>
              
          </a>
          </div>
         
    </div>
    </>
  )
}

export default Contact
