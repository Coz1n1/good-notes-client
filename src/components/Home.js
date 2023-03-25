import React from 'react'
import Navbar from './Navbar'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <div className='typing-content'>
          <h1>Welcome to GoodNotes!</h1>
        </div>
        <div className='main-screen'>
          <div className='main-screen-headers'>
            <h2>All</h2>
            <h2>In</h2>
            <h2>One</h2>
            <h2>Place</h2>
          </div>
          <div className='main-image'>
            <img className='main-image-propers' src={require('../images/note.png')} alt='image content'></img>
          </div>
        </div>
        <div className='main-footer'>
          <div className='sign'></div>
          <h3>Hello, we are trying to improve your feeling about notes</h3>
        </div>
      </div>
    </>
  )
}
