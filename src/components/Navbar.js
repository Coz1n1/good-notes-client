import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'
import { SlNote } from 'react-icons/sl'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Navbar(props) {
    const [click, setClick] = useState(false)
    const [authState, setAuthState] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => setClick(!click)

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState(!authState)
        navigate("/login")
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setAuthState(true)
        }
    }, [])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-header'>
                    <div className='navbar-header-title'>
                        <NavLink to='/home' className={({ isActive }) =>
                            "navbar-header-title-content" + (isActive ? " activated" : "")
                        }><SlNote className='navbar-header-icon' />Good Notes</NavLink>
                    </div>
                </div>
                <div className='navbar-mobile-menu-icon' onClick={handleClick}>
                    {click ? <FaTimes className='menu-icon'/> : <FaBars className='menu-icon'/>}
                </div>
                <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    {authState ?
                        <>
                            <li className='navbar-item'>
                                <NavLink to='/mynotes' className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }>MyNotes</NavLink>
                            </li>
                            <li className='navbar-item'>
                                <NavLink to='/profile' className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }><div className='avatar'>{props.user[0]}</div>{props.user}</NavLink>
                            </li>
                            <button className='logout-button' onClick={logout}>Logout</button>
                        </>
                        :
                        <>
                            <li className='navbar-item'>
                                <NavLink to='/login' className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }>Login</NavLink>
                            </li>
                            <li className='navbar-item' >
                                <NavLink to='/register' className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }>Register</NavLink>
                            </li>
                            <li className='navbar-item'>
                                <Link to='about' spy={true} smooth={true} offset={-90} duration={500} className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }>About</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to='contact' spy={true} smooth={true} offset={-90} duration={500} className={({ isActive }) =>
                                    "navbar-link" + (isActive ? " activated" : "")
                                }>Contact</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </>
    )
}
