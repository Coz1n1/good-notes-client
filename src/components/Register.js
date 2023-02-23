import React from 'react'
import Navbar from './Navbar'
import '../styles/register.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import Axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [com, setCom] = useState('')

    const registerSubmit = () => {
        console.log(username + ' ' + password + ' ' + email)
        if (username !== '' && password !== '' && email !== '') {
            Axios.post('http://localhost:3002/register', {
                username: username,
                password: password,
                email: email,
            }).then((response) => {
                console.log(response.data)
                setCom(response.data.com)
            })
        } else {
            setCom('fill in all blanks')
            console.log('fill in all blanks')
        }
    }

    return (
        <>
            <Navbar />
            <div className='register-form'>
                <div className='register-form-header'>Create an account</div>
                <div className='register-form-input-label'>Enter your username</div>
                <input type='text' className='register-form-input' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='register-form-input-label'>Enter your password</div>
                <input type='password' className='register-form-input' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}></input>
                <div className='register-form-input-label'>Enter your email</div>
                <input type='text' className='register-form-input' placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)}></input>
                <div className='register-form-feedback'>{com}</div>
                <button onClick={registerSubmit} className='register-form-submit'>Register</button>
                <div className='register-form-password-reminder'>Have you forgotten your password?</div>
            </div>
            <div className='register-to-login'>Already have an account?<NavLink to='/login' className='register-to-login-link'>Login<AiOutlineRight /></NavLink></div>
        </>
    )
}
