import React, { useState } from 'react'
import '../styles/navbar.css'
import { SlNote } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-header'>
                    <div className='navbar-header-title'>
                        <NavLink to='/' className={({ isActive }) =>
                            "navbar-header-title-content" + (isActive ? " activated" : "")
                        }><SlNote className='navbar-header-icon' />Good Notes</NavLink>
                    </div>
                </div>
                <div className='navbar-mobile-menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
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
                        <NavLink to='/about' className={({ isActive }) =>
                            "navbar-link" + (isActive ? " activated" : "")
                        }>About</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
