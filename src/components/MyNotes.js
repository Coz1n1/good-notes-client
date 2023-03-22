import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Note from './Note'
import '../styles/mynotes.css'
import {AiOutlinePlus} from 'react-icons/ai'

export default function MyNotes(props) {
    const [allNotes, setAllNotes] = useState([])
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const addNote = () => {
        console.log('add')
        navigate('/mynotes/addnote')
    }

    useEffect(() => {
        setUsername(props.name)
        Axios.post('http://localhost:3002/getAll', {
            username: username,
        }).then((response) => {
            console.log(response.data.rows.length)
            setAllNotes(response.data.rows.map((e) =>
                <Note key={e.id} title={e.title} text={e.text} date={e.date} identity={e.id}/>
            ))
        })
    }, [props.name, username])

    return (
        <>
            <Navbar user={props.name} />
            <div className='all-notes-display'>{allNotes}</div>
            <button onClick={addNote} className='addnote-button'><AiOutlinePlus/></button>
        </>
    )
}
