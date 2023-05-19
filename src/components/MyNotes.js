import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Note from './Note'
import '../styles/mynotes.css'
import {AiOutlinePlus, AiOutlineCloseCircle} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {IoMdReturnLeft} from 'react-icons/io'

export default function MyNotes(props) {
    const [allNotes, setAllNotes] = useState([])
    const [username, setUsername] = useState('')
    const [filter,setFilter] = useState([])
    const [search, setSearch] = useState(false)
    const [searchResult, setSearchResult] = useState('')
    const navigate = useNavigate()

    const addNote = () => {
        navigate('/mynotes/addnote')
    }

    const handleFilter = (e) => {
        const title = e.target.value
        setSearchResult(title)
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

    const clearSearchbar = () => {
        setFilter([])
        setSearchResult('')
    }

    const backButton = () => {
        navigate("/home")
    }

    useEffect(() => {
        setUsername(props.name)
        Axios.post('https://good-notes-server-production.up.railway.app/getAll', {
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
            <IoMdReturnLeft className='notes-back-icon' onClick={backButton}/>
            <div className='searchbar'>
                <input value={searchResult} type='text' placeholder='Search...' className='searchbar-input' onChange={handleFilter}></input>
                <div className='searchbar-icon'>
                    {filter.length > 0 ?
                    <AiOutlineCloseCircle onClick={clearSearchbar}/>
                :
                    <BsSearch/>
                }
                </div>
            </div>
            <button onClick={addNote} className='addnote-button'><AiOutlinePlus className='addnote-icon'/></button>
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
