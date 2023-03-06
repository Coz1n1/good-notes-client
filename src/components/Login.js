import React from 'react'
import Navbar from './Navbar'
import '../styles/login.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react'
import Axios from 'axios'

export default function Login() {
    const [response, setResponse] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = () => {
        if (username !== '' && password !== '') {
            Axios.post('http://localhost:3002/login',
                {
                    username: username,
                    password: password,
                }
            ).then((response) => {
                console.log(response.data)
                setResponse(response.data.back)
            })
        } else {
            setResponse('Fill in all blanks')
        }
    }

    return (
        <>
            <Navbar />
            <div className='login-form'>
                <div className='login-form-header'>Login</div>
                <div className='login-form-label'>Username: </div>
                <input type='text' placeholder='Enter your username...' className='login-form-input' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='login-form-label'>Password: </div>
                <input type='password' placeholder='Enter your password...' className='login-form-input' onChange={(e) => setPassword(e.target.value)}></input>
                <div className='login-form-feedback'>{response}</div>
                <button onClick={loginSubmit} className='login-form-submit'>Login</button>
            </div>
            <div className='login-to-register'>Don't have an account?<NavLink to='/register' className='login-to-register-link'>Register here<AiOutlineRight /></NavLink></div>
        </>
    )
}
