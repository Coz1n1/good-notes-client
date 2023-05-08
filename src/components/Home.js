import React from 'react'
import Navbar from './Navbar'
import '../styles/home.css'
import About from './About'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='main' id='main'>
        <div className='typing-content'>
          <h1>Welcome to GoodNotes!</h1>
        </div>
        <div className='main-screen'>
          <div className='main-screen-headers'>
            <span className='span-text'>All</span>
            <span className='span-text'>In</span>
            <span className='span-text'>One</span>
            <span className='span-text'>Place</span>
          </div>
          <div className='main-image-section'>
            <div className='main-image-dot'>
            </div>
            <div className='main-image-dot2'>
            </div>
            <img className='main-image-propers' src={require('../images/note.png')} alt='content'></img>
          </div>
        </div>
        <div className='main-footer'>
          <div className='sign'></div>
          <h3>Hello, enjoy your simple notes and daily task application</h3>
        </div>
      </div>
      <About/>
      <Contact/>
    </>
  )
}
