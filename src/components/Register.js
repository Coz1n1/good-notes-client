import React from 'react'
import Navbar from './Navbar'
import '../styles/register.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineRight, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineQuestionCircle } from 'react-icons/ai'
import Axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirm, setConfirm] = useState('')
    const [com, setCom] = useState('')
    const [validError, setValidError] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)

    function isValid(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (e) => {
        if (!isValid(e.target.value)) {
            setValidError('Invalid email')
            setIsEmailValid(false)
            if (e.target.value === '') {
                setValidError(null)
            }
        } else {
            setValidError(null)
            setIsEmailValid(true)
        }
        setEmail(e.target.value)
    }

    const registerSubmit = () => {
        console.log(username + ' ' + password + ' ' + email)
        if (username !== '' && password !== '' && email !== '' && confirm !== '') {
            if (password === confirm) {
                if (isEmailValid) {
                    Axios.post('http://localhost:3002/register', {
                        username: username,
                        password: password,
                        email: email,
                    }).then((response) => {
                        console.log(response.data)
                        setCom(response.data.com)
                    })
                } else {
                    setCom('invalid email')
                }
            } else {
                alert('Incorrect password')
            }
        } else {
            setCom('fill in all blanks')
        }
    }

    return (
        <>
            <Navbar />
            <div className='register-form'>
                <div className='register-form-header'>Create an account<AiOutlineQuestionCircle /></div>
                <div className='register-form-input-label'>Username: </div>
                <input type='text' className='register-form-input' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='register-form-input-label'>Password: </div>
                <input type='password' className='register-form-input' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}></input>
                <div className='register-form-input-label'>Confirm your password: </div>
                <input type='password' className='register-form-input' placeholder='Confirm your password...' onChange={(e) => setConfirm(e.target.value)}></input>
                <div className='register-form-input-label'>Email: </div>
                <input type='text' className='register-form-input' placeholder='Enter your email...' onChange={handleChange}></input>
                <div className='register-form-valid-text'>{validError}</div>
                <div className='register-form-feedback'>{com}</div>
                <button onClick={registerSubmit} className='register-form-submit'>Register</button>
                <div className='register-form-password-reminder'>Have you forgotten your password?</div>
            </div>
            <div className='register-to-login'>Already have an account?<NavLink to='/login' className='register-to-login-link'>Login<AiOutlineRight /></NavLink></div>
        </>
    )
}
