import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Note from './Note'

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
            console.log(response.data.rows)
            setAllNotes(response.data.rows.map((e) =>
                <Note key={e.id} title={e.title} text={e.text} date={e.date} />
            ))
        })
    }, [props.name, username])

    return (
        <>
            <Navbar user={props.name} />
            <div>{allNotes}</div>
            <button onClick={addNote}>AddNote</button>
        </>
    )
}
