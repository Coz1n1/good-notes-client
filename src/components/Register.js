import React from 'react'
import Navbar from './Navbar'
import '../styles/register.css'
import { useState } from 'react'

export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerSubmit = () => {
        console.log(username + ' ' + password)

    }

    return (
        <>
            <Navbar />
            <div className='register-form'>
                <div className='register-form-header'>Register</div>
                <div className='register-form-input-label'>Enter your username</div>
                <input type='text' className='register-form-input' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='register-form-input-label'>Enter your password</div>
                <input type='password' className='register-form-input' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={registerSubmit} className='register-form-submit'>Register</button>
            </div>
        </>
    )
}
