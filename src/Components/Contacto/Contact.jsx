import React from 'react'
import Email from './Email/Email'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Contac.css'

function Contact() {
  return (
    <>
    <div className='contactAll'>

          
              <Email/>
          

          <div className='networks'>
          <a href='https://github.com/4Bprograming'>
              <AiFillGithub className='gitHub'/>
          </a>
          <a href='https://www.instagram.com/4b_programing/'>
              <BsInstagram className='instagram'/>
          </a>
          </div>
         
    </div>
    </>
  )
}

export default Contact