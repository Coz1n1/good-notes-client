import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import '../styles/addnote.css'
import {IoMdReturnLeft} from 'react-icons/io'

export default function AddNote(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const addNote = () => {
        console.log(props.name + ' ' + title + ' ' + content)
        Axios.post('http://localhost:3002/addnote', {
            username: props.name,
            title: title,
            content: content,
            date: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        }).then((response) => {
            console.log(response.data.com)
        })
        navigate('/mynotes')
    }

    const back = () => {
        navigate('/mynotes')
    }

    return (
        <>
            <div className='addnote-content'>
                <div className='back-icon'>
                <IoMdReturnLeft onClick={back} className='back'/>
                </div>
                <div className='adding-form'>
                <label>Title</label>
                <input type='text' onChange={((e) => setTitle(e.target.value))} className='adding-form-input'></input>
                <label>Content</label>
                <textarea onChange={((e) => setContent(e.target.value))} className='adding-form-input'></textarea>
                <button onClick={addNote} className='adding-form-button'>Add Note</button>
                </div>
            </div>
        </>
    )
}
