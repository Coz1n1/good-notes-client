import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

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
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleLog}>Log</button>
      </div>
      <div>
        <h3>Task overview: </h3>
      <div>
        {allTasks.map((e, key) => 
            <div key={key}>{e}</div>
        )}
      </div>
      </div>
    </div>
    </>
  )
}
