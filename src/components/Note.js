import React from 'react'
import '../styles/note.css'
import {BsTrash} from 'react-icons/bs'
import Axios from 'axios'

export default function Note(props) {

    const deleteItem = () => {
        console.log(props.identity)
        Axios.post('https://good-notes-server.herokuapp.com/deleteItem', {
            id: props.identity
        }
        ).then((response)=> {
            console.log(response.data.com)
        })
    }

    return (
        <>
            <div className='note'>
                <div className='note-title'>{props.title}</div>
                <div className='note-content'>{props.text}</div>
                <div className='note-footer'><div className='note-footer-date'>{props.date}</div><button onClick={deleteItem} className='note-footer-delete'><BsTrash/></button></div>
            </div>
        </>
    )
}
