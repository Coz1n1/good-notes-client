import React from 'react'
import Axios from 'axios'
import '../styles/profile.css'
import { useState, useEffect} from 'react'
import { AiFillEdit } from 'react-icons/ai'
import {IoMdReturnLeft} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function Profile(props) {
    const [email, setEmail] = useState('')
    const navigate = useNavigate('')

    const backButton = () => {
        navigate("/home")
    }

    useEffect(()=> {
        Axios.post('https://good-notes-server.herokuapp.com/userInfo', {
            username: props.name
        }).then((response) => {
            console.log(response.data)
            setEmail(response.data.email)
        })
    },[props.name])
    
  return (
    <>
        <div className='profile-section'>
            <div className='h'>
                <div className='h-icon' onClick={backButton}>
                <IoMdReturnLeft/>
                </div>
                <div className='h-name'>Settings</div>
            </div>
            <div className='user-content'>
                <div className='header'>Account</div>
                    <div className='user-info'>
                        <div className='user-info-name'>
                            <div>Name</div>
                            <div className='users-data'>{props.name}</div>
                        </div>
                        <div className='user-info-email'>
                            <div>Email</div>
                            <div className='users-data'>{email}</div>
                        </div>
                        <div className='user-info-password'>
                            <div>
                                <div>Password</div>
                                <div className='users-data'>********</div>
                            </div>
                            <div className='icon'>
                            <AiFillEdit/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
