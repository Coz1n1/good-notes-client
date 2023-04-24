import React from 'react'
import '../styles/home.css'
import {Link} from 'react-scroll'
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function About() {
    return (
        <>
            <div className='about-section' id='about'>
                <Link to='main' spy={true} smooth={true} offset={-100} duration={500}><BsFillArrowUpCircleFill/></Link>
                <div>ABOUT</div>
                <Link to='contact' spy={true} smooth={true} offset={-95} duration={500}><BsFillArrowDownCircleFill/>contact</Link>
            </div>
        </>
    )
}
