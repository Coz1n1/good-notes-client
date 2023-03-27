import React from 'react'
import Axios from 'axios'
import '../styles/profile.css'
import { useState, useEffect} from 'react'

export default function Profile(props) {
    const [email, setEmail] = useState('')
    
    useEffect(()=> {
        Axios.post('http://localhost:3002/userInfo', {
            username: props.name
        }).then((response) => {
            console.log(response.data)
            setEmail(response.data.email)
        })
    },[props.name])
    
  return (
    <>
        <div className='main'>
            <h4>Settings</h4>
            <div className='user-info'>
                <div>name: {props.name}</div>
                <div>email: {email}</div>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}
