import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import About from './About';
import Auth from './Auth';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
