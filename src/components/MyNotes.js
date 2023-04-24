import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Note from './Note'
import '../styles/mynotes.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

export default function MyNotes(props) {
    const [allNotes, setAllNotes] = useState([])
    const [username, setUsername] = useState('')
    const [filter,setFilter] = useState([])
    const [search, setSearch] = useState(false)
    const navigate = useNavigate()

    const addNote = () => {
        navigate('/mynotes/addnote')
    }

    const handleFilter = (e) => {
        const title = e.target.value
        const filtered = allNotes.filter((value) => {
            return value.title.toLowerCase().includes(title)
        })
        if(title === ""){
            setFilter([])
            setSearch(false)
        }else {
            setFilter(filtered)
            setSearch(true)
        }
    }

    useEffect(() => {
        setUsername(props.name)
        Axios.post('http://localhost:3002/getAll', {
            username: username,
        }).then((response) => {
            console.log(response.data.rows.length)
            setAllNotes(response.data.rows)
        })
    }, [props.name, username, allNotes])

    return (
        <>
            <Navbar user={props.name} />
            <div className='a'>          
            <button onClick={addNote} className='addnote-button'><AiOutlinePlus className='addnote-icon'/></button>
            <div className='searchbar'>
                <input type='text' placeholder='Search...' className='searchbar-input' onChange={handleFilter}></input>
                <div className='searchbar-icon'>
                    <BsSearch/>
                </div>
            </div>
            </div>  
            <div>
                {search ? 
                    <>
                        <h3 className='notes-header'>You searched for</h3>
                        <div className='searched-notes-display'>
                        {filter.map((e,key)=> 
                        <Note key={key} title={e.title} text={e.text} date={e.date} identity={e.id}/>
                        )}
                        </div>
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <h3 className='notes-header'>All Your Notes</h3>
            <div className='all-notes-display'>
                    {allNotes.map((e, key) =>
                        <Note key={key} title={e.title} text={e.text} date={e.date} identity={e.id}/>
                    )}
            </div>
        </>
    )
}
