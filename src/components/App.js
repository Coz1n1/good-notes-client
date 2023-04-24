import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Auth from './Auth';
import MyNotes from './MyNotes';
import AddNote from './AddNote';
import Profile from './Profile';
import MyTasks from './MyTasks';
import { AuthContext } from "../helpers/AuthContext"
import { useState, useEffect } from 'react';

function App() {
  const [profileName, setProfileName] = useState('')

  useEffect(()=> {
    if(localStorage.getItem("accessToken")){
    }
  }, [])
  return (
    <>
      <AuthContext.Provider value={{ profileName, setProfileName }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/mytasks' element={<MyTasks name={profileName}/>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/mynotes' element={<MyNotes name={profileName} />}></Route>
            <Route path='/mynotes/addnote' element={<AddNote name={profileName} />}></Route>
            <Route path='/home' element={<Auth name={profileName} />}></Route>
            <Route path='/profile' element={<Profile name={profileName}/>}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
