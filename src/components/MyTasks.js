import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {MdDoneOutline} from 'react-icons/md'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import '../styles/mytasks.css'

export default function MyTasks(props) {
  const [allTasks, setAllTasks] = useState([])
  const [task, setTask] = useState('')

  const handleAdd = () => {
    console.log(task)
    setAllTasks([...allTasks, task])
    setTask('')
  }

  const handleLog = () => {
    console.log(allTasks)
    setAllTasks([])
    setTask('')
    console.log(allTasks.length)
  }

  return (
    <>
    <Navbar user={props.name} />
    <div className='mytasks-content'>
      <div className='addtask-content'>
      <input value={task} type='text' placeholder='Add Task...' onChange={(e)=>setTask(e.target.value)}></input>
      <button className='add-button' onClick={handleAdd}>Add</button>
      <button onClick={handleLog}>Log</button>
      </div>
      <div>
        <h3 className='tasks-header'>Your Tasks: </h3>
      <div className='all-tasks'>
        {allTasks.map((e, key) => {
          return(
            <div className='added-task' key={key}>
              <span className='task-number'>{key + 1}</span>
              <span className='task-name'>{e}</span>
              <div className='added-task-icons'>
              <span className='icon-props'><MdDoneOutline/></span>
              <span className='icon-props'><AiFillEdit/></span>
              <span className='icon-props'><AiFillDelete/></span>
              </div>
            </div>
          )
        })
        }
      </div>
      </div>
    </div>
    </>
  )
}
