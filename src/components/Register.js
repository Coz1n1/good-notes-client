import React from 'react'
import '../styles/register.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineRight, AiOutlineEyeInvisible, AiOutlineEye, AiOutlineQuestionCircle } from 'react-icons/ai'
import Axios from 'axios'
import {IoMdReturnLeft} from 'react-icons/io'


export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirm, setConfirm] = useState('')
    const [com, setCom] = useState('')
    const [validError, setValidError] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isCheckVisible, setIsCheckVisible] = useState(false)

    const navigate = useNavigate()
    Axios.defaults.withCredentials = true

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

    const backButton = () => {
        navigate("/")
    }

    const handleVisibility = () => {
        let a = document.getElementById("password")
        if(a.type === 'password'){
            a.type = 'text'
        }else if(a.type === 'text'){
            a.type = 'password'
        }
    }

    const handleConfirmVisibility = () => {
        let a = document.getElementById("password-confirm")
        if(a.type === 'password'){
            a.type = 'text'
        }else if(a.type === 'text'){
            a.type = 'password'
        }
    }

    const registerSubmit = () => {
        console.log(username + ' ' + password + ' ' + email)
        if (username !== '' && password !== '' && email !== '' && confirm !== '') {
            if (password === confirm) {
                if (isEmailValid) {
                    Axios.post('https://good-notes-server.herokuapp.com/register', {
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
                setCom('Incorrect password')
            }
        } else {
            setCom('fill in all blanks')
        }
    }

    return (
        <>
            <div className='reg-back'>
                <IoMdReturnLeft className='reg-back-icon' onClick={backButton}/>
            </div>
            <div className='register-form'>
                <div className='register-form-header'>Create an account<AiOutlineQuestionCircle /></div>
                <div className='register-form-input-label'>Username: </div>
                <input type='text' className='register-form-input' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}></input>
                <div className='register-form-input-label'>Password: </div>
                <div className='pass-management'>
                <span className='eye-icon' onClick={()=>setIsVisible(!isVisible)}>
                    {isVisible ?
                            <AiOutlineEyeInvisible onClick={handleVisibility}/>
                        :
                            <AiOutlineEye onClick={handleVisibility}/>
                    }
                </span>
                <input id='password' type='password' className='register-form-input' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='register-form-input-label'>Confirm your password: </div>
                <div className='pass-management'>
                <span className='eye-icon' onClick={()=>setIsCheckVisible(!isCheckVisible)}>
                    {isCheckVisible ?
                            <AiOutlineEyeInvisible onClick={handleConfirmVisibility}/>
                        :
                            <AiOutlineEye onClick={handleConfirmVisibility}/>
                    }
                </span>
                <input id='password-confirm' type='password' className='register-form-input' placeholder='Confirm your password...' onChange={(e) => setConfirm(e.target.value)}></input>
                </div>
                <div className='register-form-input-label'>Email: </div>
                <input type='text' className='register-form-input' placeholder='Enter your email...' onChange={handleChange}></input>
                <div className='register-form-valid-text'>{validError}</div>
                <div className='register-form-feedback'>{com}</div>
                <button onClick={registerSubmit} className='register-form-submit'>Register</button>
            </div>
            <div className='register-to-login'>Already have an account?<NavLink to='/login' className='register-to-login-link'>Login<AiOutlineRight /></NavLink></div>
        </>
    )
}
