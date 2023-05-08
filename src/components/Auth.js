import React from 'react'
import Navbar from './Navbar'
import '../styles/auth.css'
import { useNavigate } from 'react-router-dom'

export default function Auth(props) {
    const navigate = useNavigate()

    const navTasks = () => {
        navigate('/mytasks')
    }

    const navNotes = () => {
        navigate('/mynotes')
    }

    return (
        <>
            <Navbar user={props.name} />
            <div className='auth-section'>
                <span className='welcome-header bouncing'>Welcome, <span className='welcome-header-user'>{props.name}</span></span>
                <div className='all-content'>
                    <div className='left-content' onClick={navTasks}>
                        <span className='left-content-header'>MyTasks</span>
                        <img className='left-content-img' src={require('../images/task.png')} alt='content'></img>
                    </div>
                    <div className='right-content' onClick={navNotes}>
                        <span className='right-content-header'>MyNotes</span>
                        <img className='right-content-img' src={require('../images/note-auth.png')} alt='content'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
