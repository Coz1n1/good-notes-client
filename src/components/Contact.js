import React from 'react'
import '../styles/home.css'
import {Link} from 'react-scroll'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import '../styles/contact.css'
import {FaHandPointDown} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'


export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_2xr6v1h', 'template_p5zcksj', form.current, 'Cio7LFNsQu1QwGLtF')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
          setUser('')
          setEmail('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }

  return (
    <>
        <div className='contact-section' id='contact'>
          <div className='left'>
            <Link to='main' spy={true} smooth={true} offset={-100} duration={500}><BsFillArrowUpCircleFill className='up'/></Link>
            <div className='form-header'>Contact <FaHandPointDown/></div>
            <form ref={form} onSubmit={handleSubmit}>
              <label>Name</label>
              <input onChange={(e) => setUser(e.target.value)} value={user} type='text' name='name' placeholder='Name...'></input>
              <label>Your Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' name='email' placeholder='Email...'></input>
              <label>Content</label>
              <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' placeholder='Message...'/>
              <input className='submit-button' type='submit' value='Send'></input>
              <div className='feedback'>
              {success && 
              "Your message has been send"}
              </div>
            </form>
            </div>
        </div>
    </>
  )
}
