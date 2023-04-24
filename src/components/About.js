import React from 'react'
import '../styles/home.css'
import {Link} from 'react-scroll'
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function About() {
    return (
        <>
            <div className='about-section' id='about'>
                <div className='about-section-link'>
                <Link to='main' spy={true} smooth={true} offset={-100} duration={500}><BsFillArrowUpCircleFill/></Link>
                </div>
                <div className='about-main'>
                    <div className='about-description'>
                        <div className='about-description-header'>GoodNotes</div>
                        <div className='about-description-content'>We are the place where you can freely manage your notes and daily tasks.</div>
                    </div>
                    <div className='about-main-up'>
                        <div className='about-main-up-left'>
                            <div className='about-main-up-header'>MyNotes</div>
                            <div className='about-main-up-content'>You can create any note which are stored in database.</div>
                        </div>
                        <div className='about-main-up-right'>
                            <div className='about-main-up-header'>MyTasks</div>
                            <div className='about-main-up-content'>Create tasks and watch the progress.</div>
                        </div>
                    </div>
                    <div className='about-technologies'>
                        <div className='about-technologies-header'>Technologies:</div>
                        <div className='about-technologies-content'>
                            <img className='about-technologies-img-propers-react' src={require('../images/react.png')} alt='content'></img>
                            <img className='about-technologies-img-propers' src={require('../images/html.png')} alt='content'></img>
                            <img className='about-technologies-img-propers' src={require('../images/css.png')} alt='content'></img>
                            <img className='about-technologies-img-propers-node' src={require('../images/node.png')} alt='content'></img>
                            <img className='about-technologies-img-propers' src={require('../images/posgresql.png')} alt='content'></img>
                        </div>
                    </div>
                </div>
                <div className='about-section-link'>
                <Link to='contact' spy={true} smooth={true} offset={-95} duration={500}><BsFillArrowDownCircleFill/></Link>
                </div>
            </div>
        </>
    )
}
