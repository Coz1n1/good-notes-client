import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

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
            <div>
                <button onClick={back}>Back</button>
                <input type='text' onChange={((e) => setTitle(e.target.value))}></input>
                <input type='text' onChange={((e) => setContent(e.target.value))}></input>
                <button onClick={addNote}>Add Your Note</button>
            </div>
        </>
    )
}
