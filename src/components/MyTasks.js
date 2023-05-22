import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import {MdDoneOutline} from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import '../styles/mytasks.css'
import { useNavigate } from 'react-router-dom'
import {IoMdReturnLeft} from 'react-icons/io'

export default function MyTasks(props) {
  const [allTasks, setAllTasks] = useState([])
  const [task, setTask] = useState('')
  const [update, setUpdate] = useState('')
  const navigate = useNavigate()

  document.getElementById('navHeader').style.display = none;

  const backButton = () => {
    navigate("/home")
  }

  const handleAdd = () => {
    console.log(task)
    if(task){
      let id = allTasks.length + 1
      let t = {id: id, title: task}
      setAllTasks([...allTasks, t])
      setTask('')
    }
  }

  const handleDone = (id) => {
    console.log(id)
    let newAllTasks = allTasks.filter( t => t.id !== id )
    setAllTasks(newAllTasks)
    console.log(allTasks)
  }

  const handleEdit = (e) => {
    let newEntry = {
      id: update.id,
      title: e.target.value
    }
    setUpdate(newEntry)
  }

  const handleUpdateTask = () => {
    let filter = [...allTasks].filter(e => e.id !== update.id)
    let updated = [...filter, update]
    setAllTasks(updated)
    setUpdate('')
  }

  const handleCancel = () => {
    setUpdate('')
  }

  return (
    <>
    <Navbar user={props.name} />
    <div className='mytasks-content'>
      <div className='addtask-content'>
        <IoMdReturnLeft className='notes-back-icon' onClick={backButton}/>
        {update && update ?
        <>
        <input value={update && update.title} type='text' placeholder='Edit Task...' onChange={(e)=>handleEdit(e)}></input>
        <button className='add-button' onClick={handleUpdateTask}>Edit</button>
        <button className='cancel-button' onClick={handleCancel}>Cancel</button>
        </>
        :
        <>
        <input value={task} type='text' placeholder='Add Task...' onChange={(e)=>setTask(e.target.value)}></input>
        <button className='add-button' onClick={handleAdd}>Add</button>
        </>  
      }
      </div>
      <div>
        <h3 className='tasks-header'>Your Tasks: </h3>
      <div className='all-tasks'>
        {allTasks.length > 0 ? allTasks.map((e, key) => {
          return(
            <div className='added-task' key={key}>
              <span className='task-number'>{key + 1}</span>
              <span className='task-name'>{e.title}</span>
              <div className='added-task-icons'>
              <span className='icon-props' onClick={() => handleDone(e.id)}><MdDoneOutline/></span>
              <span className='icon-props' onClick={() => setUpdate({id: e.id, title: e.title})}><AiFillEdit/></span>
              </div>
            </div>
          )
        })
        :
          <span className='no-tasks-header'>No tasks...</span>
        }
      </div>
      </div>
    </div>
    </>
  )
}
