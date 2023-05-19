import React from 'react'
import '../styles/login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineRight, AiOutlineEyeInvisible, AiOutlineEye, } from 'react-icons/ai'
import { useState, useContext } from 'react'
import Axios from 'axios'
import { AuthContext } from '../helpers/AuthContext'
import {IoMdReturnLeft} from 'react-icons/io'

export default function Login() {
    const [response, setResponse] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { setProfileName } = useContext(AuthContext)
    const [isVisible, setIsVisible] = useState(false)
    Axios.defaults.withCredentials = true

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

    const loginSubmit = () => {
        if (username !== '' && password !== '') {
            Axios.post('${process.env.REACT_APP_BACKEND_URL}/login',
                {
                    username: username,
                    password: password,
                }
            ).then((response) => {
                console.log(response.data)
                if (!response.data.err) {
                    console.log(response.data.username)
                    localStorage.setItem('accessToken', response.data.accessToken)
                    setProfileName(response.data.username)
                    navigate("/home")
                } else {
                    setResponse(response.data.err)
                }
            })
        } else {
            setResponse('Fill in all blanks')
        }
    }

    return (
        <>
                <div className='login-back'>
                <IoMdReturnLeft className='login-back-icon' onClick={backButton}/>
                </div>
                <div className='login-form'>
                    <div className='login-form-header'>Log in</div>
                    <div className='login-form-label'>Username: </div>
                    <input type='text' placeholder='Enter your username...' className='login-form-input' onChange={(e) => setUsername(e.target.value)}></input>
                    <div className='login-form-label'>Password: </div>
                    <div className='pass-management'>
                    <span className='eye-icon' onClick={()=>setIsVisible(!isVisible)}>
                    {isVisible ?
                            <AiOutlineEyeInvisible onClick={handleVisibility}/>
                        :
                            <AiOutlineEye onClick={handleVisibility}/>
                    }
                    </span>
                    <input id='password' type='password' placeholder='Enter your password...' className='login-form-input' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='login-form-feedback'>{response}</div>
                    <button onClick={loginSubmit} className='login-form-submit'>Login</button>
                    <div className='password-reminder'>Have you forgotten your password?</div>
                </div>
                <div className='login-to-register'>Don't have an account?<NavLink to='/register' className='login-to-register-link'>Register here<AiOutlineRight /></NavLink></div>
        </>
    )
}
