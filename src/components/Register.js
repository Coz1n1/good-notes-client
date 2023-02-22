import React from 'react'
import Navbar from './Navbar'
import '../styles/register.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

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
                <div className='register-form-header'>Create an account</div>
                <div className='register-form-input-label'>Enter your username</div>
                <input type='text' className='register-form-input' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='register-form-input-label'>Enter your password </div>
                <input type='password' className='register-form-input' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={registerSubmit} className='register-form-submit'>Register</button>
                <div className='register-form-password-reminder'>Have you forgotten your password?</div>
            </div>
            <div className='register-to-login'>Already have an account?<NavLink to='/login' className='register-to-login-link'>Login<AiOutlineRight /></NavLink></div>
        </>
    )
}
